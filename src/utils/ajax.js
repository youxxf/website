import axios from 'axios';
axios.defaults.baseURL = '';
export default function ajax(url, data = {}, method = 'GET', config) {
  // console.log(data);
  return new Promise((resolve, reject) => {
    let result;
    switch (method) {
      case 'GET':
        let queryStr = '';
        Object.keys(data).forEach(item => {
          const value = data[item];
          queryStr += `${item}=${value}&`;
        });
        if (queryStr !== '') {
          queryStr = queryStr.substring(0, queryStr.length - 1);
          url += '?' + queryStr;
        }
        result = axios.get(url, config);
        break;
      case 'DELETE':
        result = axios.delete(url, data);
        break;
      case 'PUT':
        result = axios.put(url, data, config);
        break;
      default:
        result = axios.post(url, data, config);
    }
    result
      .then(response => {
        resolve(response.data);
        if (response.data === 888) {//未登陆状态
          console.log('唤起登录弹窗...');
        }
      })
      .catch(error => {
        reject(error);
      });
  });
}
