import { IncomingMessage, ServerResponse} from 'http';
import HttpControllers from '../controllers/http';
import PostsControllers from '../controllers/posts';

const routes = async (req: IncomingMessage, res: ServerResponse) => {
  const { method, url} = req;
  console.log(method, url);

  let body: string = '';
  req.on ('data', (chunk) => {
    body += chunk;
  });

  if (url === '/posts' && method === 'GET') {
    PostsControllers.getPosts({req, res});
  } else {
    HttpControllers.notFound(req, res);
  }
};

export default routes;