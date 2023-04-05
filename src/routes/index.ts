import { IncomingMessage, ServerResponse} from 'http';
import { Posts }  from '../model/posts'

const routes = async (req: IncomingMessage, res: ServerResponse) => {
  const { method, url} = req;
  console.log(method, url);
  
  const allPosts = await Posts.find();
  console.log(allPosts);
};

export default routes;