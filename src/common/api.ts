// const BUILD_ENV = process.env.BUILD_ENV || 'development';
const BUILD_ENV = 'development'

// 接口域名
const getPrefix = function (env: string) {
  let prefix = '';
  const innerPrefix = window.location.origin;
  switch (env) {
    case 'development':
      prefix = '';
      break;
    case 'stg':
      prefix = innerPrefix;
      break;
    case 'production':
      prefix = innerPrefix;
      break;
  }
  return prefix;
};

// 接口路径
const Apis = {
  /******************融易产品日报*****************************/
  GET_RY_OVERALL: '/web/ryProduct/getOverall', // 融易产品监测全量数据
  GET_RY_DEPT_DATA_VIEW: '/web/ryProduct/getDeptDataView' // 融易产品监测机构表现数据
};

const Api: any = Apis;
for (const item in Api) {
  Api[item] = getPrefix(BUILD_ENV) + Api[item];
}
export const Prefix = getPrefix(BUILD_ENV);
export default Api;
