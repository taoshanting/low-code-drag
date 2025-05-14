/**
 * 使用fetch请求
 */
import { Request } from './request';
import { Constant, Utils } from '@/common';

const Fetch = (url: string, config: any) => {
  config.method = config.method || 'POST';
  config.headers = Object.assign(
    {
      requestId: new Date().getTime()
    },
    config.headers
  );

  // 应用端所有接口请求head中增加token
  if (window.APPLICATION_TOKEN) {
    config.headers['jwtToken'] = window.APPLICATION_TOKEN;
  }

  return new Promise((resolve, reject) => {
    Request(url, config)
      .then((res: any) => {
        const { code, data } = res;

        console.group();
        console.log('接口url：', url);
        console.info('接口入参：');
        console.info(config.body);
        console.info('接口返回：');
        console.info(data);
        console.groupEnd();

        // 登录态过期则跳转到登录页
        if (code === Constant.HTTP_STATUS.LOGIN_EXPIRED) {
          Utils.delCookie('UM_ID');
          Utils.delCookie('DEPT_CODE');
          Utils.delCookie('USER_NAME');
          sessionStorage.clear();
          window.location.href = '/';
        }

        resolve(res);
      })
      .catch(err => {
        console.log('接口url失败：', err.status, err);

        reject(err);
      });
  });
};

export { Fetch };
