import fetch from 'libs/fetch.js';

export const fetchApi = () => {
  fetch('api', {
    method: 'Get',
  })
  .then((data) => {
    console.log(data);
  });
};
