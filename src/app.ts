import http from 'http';
import './connections';

const app =  async (req: http.IncomingMessage, res: http.ServerResponse) => {
  const { method, url} = req;
  console.log(method, url);
};

export default app;