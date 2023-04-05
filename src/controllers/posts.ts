import { IncomingMessage, ServerResponse } from 'http';
import handleSuccess from "../service/handleSuccess";
// import handleErr from "../service/handleError";
import { IPost, Posts } from "../model/posts";

interface IHttpObj {
  req: IncomingMessage;
  res: ServerResponse;
  body?: string;
};

const posts = {
  async getPosts ( { res }: IHttpObj): Promise<void> {
    const allPosts: IPost[] = await Posts.find();
    handleSuccess( res, allPosts);
    res.end();
  },
};

export default posts;
