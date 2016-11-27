import fetch from '../../libs/fetch';

export const fetchApi = () => {
  fetch('api', {
    method: 'Get',
  })
  .then((data) => {
    console.log(data);
  });
};
