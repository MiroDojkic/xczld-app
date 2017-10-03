import { apiUrl } from '../config';

const client = () => {
  const url = apiUrl;

  return {
    get: path => fetch(`${url}${path}`).then(response => response.json()),
    post: (path, body) =>
      fetch(`${url}${path}`, { method: 'POST', body }).then(response =>
        response.json()
      )
  };
};

export default client();
