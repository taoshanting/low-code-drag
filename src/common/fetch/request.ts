import Qs from 'qs';
export enum ContentType {
  json = 'application/json',
  form = 'application/x-www-form-urlencoded',
  formData = 'multipart/form-data'
}

export enum HttpMethod {
  get = 'GET',
  post = 'POST',
  put = 'PUT',
  patch = 'PATCH',
  delete = 'DELETE'
}

export interface ReqConfig {
  body?: any;
  method?: string;
  headers?: Header;
  token?: string;
  'Content-Type'?: string;
  mode?: string;
  [propsName: string]: any;
}

export interface Header {
  'Content-Type'?: string;
  'X-Requested-With': string;
  token: string;
  [propName: string]: any;
  authorization?: string;
  security?: string;
}
/**
 * @description: 对结果进行处理
 * @param res
 */
const parseRes = async (res: Response) => {
  const contentType = res.headers.get('Content-Type');
  // 判定返回的内容类型，做不同的处理
  if (contentType) {
    if (contentType.indexOf('json') > -1) {
      return await res.json();
    }
    if (contentType.indexOf('text') > -1) {
      return await res.text();
    }
    if (contentType.indexOf('form') > -1) {
      return await res.formData();
    }
    if (contentType.indexOf('video') > -1) {
      return await res.blob();
    }
  }
  return await res.text();
};


const handleRes = async (res: Response) => {
  const parsedRes = await parseRes(res);
  // 如果res.ok，则请求成功
  if (res.ok) {
    return parsedRes;
  }
  // 请求失败，返回解析之后的失败的数据
  throw res;
};

const Request = async (reqUrl: string, config: ReqConfig) => {
  const signal = config.signal; // 中断请求的signal参数
  let promise: Response;
  let contentType: string;
  const header: any = config.headers || {};
  config['mode'] = 'cors';
  if (header && header['Content-Type'] !== undefined) {
    contentType = header['Content-Type'];
  } else if (config.method === HttpMethod.post) {
    contentType = ContentType.json;
  } else {
    contentType = ContentType.json;
  }
  const headers = Object.assign(header, {
    'Content-Type': contentType
  });

  if (!config.method || config.method === HttpMethod.get) {
    promise = await fetch(`${reqUrl}?${Qs.stringify(config.body)}`, {
      signal,
      headers,
      credentials: 'include' // include, same-origin, 默认值 omit 不发送 cookie
    });
  } else if (config.method === HttpMethod.post) {
    let configBody = config.body;
    switch (contentType) {
      case ContentType.json:
        configBody = JSON.stringify(configBody);
        break;
      case ContentType.form:
        configBody = Qs.stringify(configBody);
        break;
      case ContentType.formData:
        delete headers['Content-Type'];
        break;
      default:
        configBody = JSON.stringify(configBody);
    }
    
    promise = await fetch(reqUrl, {
        signal,
        body: configBody,
        headers,
        method: HttpMethod.post,
        mode: 'cors',
        credentials: 'include' // include, same-origin, 默认值 omit 不发送 cookie
      });
    } else {
      promise = await fetch(reqUrl, {
        signal,
        body: JSON.stringify(config.body),
        headers,
        method: config.method
        // credentials: 'include' // include, same-origin, 默认值 omit 不发送 cookie
      });
    }
    return handleRes(promise);
  };
  export { Request };