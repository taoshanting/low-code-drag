//  const path = require('path');
// const express = require('express');
// const klaw = require('klaw');
// const _ = require('lodash');
// const bodyParser = require('body-parser');
import path from 'path';
import express from 'express';
import klaw from 'klaw';
import _ from 'lodash';
import bodyParser from 'body-parser';
import { createRequire } from 'module';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { pathToFileURL } from 'url';

const require = createRequire(import.meta.url);
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const methodFlag = ['$get', '$post']; // 请求方法
const mockDir = path.join(process.cwd(), 'mocks');
const routers = {};
const mockFiles = [];
const port =3004
let err;

async function importMockFile(filePath) {
  try {
    const module = await import(filePath);
    return module.default || module;
  } catch (error) {
    console.error(`Error importing mock file ${filePath}:`, error);
    throw error;
  }
}

klaw(mockDir)
  .on('data', file => {
    if (path.extname(file.path) !== '.js') return;
    mockFiles.push(file.path);
  })
  .on('end', async () => {
    for (const file of mockFiles) {
      try {
        const router = await importMockFile(pathToFileURL(file).href);
        Object.assign(routers, router);
      } catch (error) {
        err = error;
        console.log(err);
      }
    }
    server(routers);
  });

function server(routers) {
  const app = express();

  const allowCrossDomain = function (req, res, next) {
    // 允许跨域
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Content-Type, X-Requested-With'
    );
    res.header(
      'Access-Control-Allow-Methods',
      'PUT, POST, GET, DELETE, OPTIONS'
    );
    next();
  };
  app.use(allowCrossDomain);
  // 处理请求体
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  Object.keys(routers).forEach(function (api) {
    const routeHander = routers[api];
    const routerInst = new express.Router();
    if (_.isFunction(routeHander)) {
      routerInst.use(api, routeHander);
    } else if (_.isObject(routeHander)) {
      // 如果存在$get/$post
      if (
        methodFlag.some(it => {
          return routeHander[it];
        })
      ) {
        methodFlag.forEach(it => {
          const method = it.toLocaleLowerCase().replace('$', '');
          if (routeHander[it]) {
            if (_.isFunction(routeHander[it])) {
              routerInst[method](api, (req, res, next) => {
                let params = req.body;
                if (method === 'get') {
                  params = req.query;
                }
                setTimeout(() => {
                  responseTo(res, api, method, routeHander[it](params));

                  next();
                }, 3000);
              });
            } else if (routeHander[it]) {
              routerInst[method](api, (req, res, next) => {
                responseTo(res, api, method, routeHander[it]);
                next();
              });
            }
          }
        });
      }
    }
    app.use('/', routerInst);
  });
  if (err) {
    app.use((req, res, next) => {
      return next(err);
    });
  }
  app.listen(port, () => {
    console.log(`Proxy at http://localhost:${port}`);
  });
}
function responseTo(res, api, method, data) {
  console.log(`${api}  ${method}`);
  res.json(data);
}
