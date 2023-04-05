import { IncomingMessage, ServerResponse} from 'http';
import HttpControllers from '../controllers/http';

const routes = async (req: IncomingMessage, res: ServerResponse) => {
  const { method, url} = req;
  console.log(method, url);

  let body: string = '';
  req.on ('data', (chunk) => {
    body += chunk;
  });

  if (url === '/posts' && method === 'GET') {
    console.log("get test");
  } else {
    HttpControllers.notFound(req, res);
  }
};

export default routes;