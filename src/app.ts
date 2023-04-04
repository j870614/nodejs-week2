import http from 'http';
import './connections';
import routes from './routes';

const app =  async (req: http.IncomingMessage, res: http.ServerResponse) => {
  routes(req, res);
};

export default app;