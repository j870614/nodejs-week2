import http from 'http';

export const app =  async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const { method, url} = req;
  console.log(method, url);
};
