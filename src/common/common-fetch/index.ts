import { Api, Fetch } from '@/common';

class CommonFetch {
  // 【主机信息获取】获取pageId
  getPageId(body?: any) {
    return this.request(Api.GET_PAGE_ID, body);
  } 

  request(url: string, body?: any, headers?: any, method = 'POST') {
    return new Promise((resolve, reject) => {
      Fetch(url, {
        headers: headers || {},
        body: body || {},
        method: method.toLocaleUpperCase()
      })
        .then((res: any) => {
          resolve(res);
        })
        .catch((e: any) => {
          console.log('接口-：', url, '报错：', e);
          reject(e);
        });
    });
  }
}

export default new CommonFetch();
