/*eslint-disable */
let baseurl;

if (process.env.NODE_ENV === 'production') {
  baseurl = '/';
} else {
  // baseurl = 'http://api.y.dev.lanyi99.cn/v1';
  
  baseurl = 'http://localhost:8080';
}

const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded'
});

const defaultOption = {
  headers,
  credentials: 'include',
};

function _fetch(url, option) {
  let _option = {...defaultOption, ...option};
  let fullurl = url.indexOf('http://') === 0 ? url : `${baseurl}/${url}`;
  return window.fetch(fullurl, _option);
}

function params(obj) {
  return Object.keys(obj)
    .filter(key => obj[key])
    .map(key =>
    `${key}=${encodeURIComponent(obj[key])}`
  ).join('&');
}

export default _fetch;

export { params };