import { IncomingMessage, ServerResponse } from 'http';
import handleSuccess from "../service/handleSuccess";
import handleErr from "../service/handleError";
import { IPost, Posts } from "../model/posts";

interface IHttpObj {
  req: IncomingMessage;
  res: ServerResponse;
  body?: string;
};
    
const posts = {
  async getPosts ( { res }: IHttpObj): Promise<void> {
    const allPosts: IPost[] = await Posts.find();
    handleSuccess<IPost[]>(res, allPosts);
    res.end();
  },
  async createPosts ( { res, body }: IHttpObj): Promise<void> {
    try {
      if (!body) {
        handleErr(res);
        return;
      }

      const data:IPost = JSON.parse(body);

      if (data.content) {
        const newPost: IPost = await Posts.create({
          name: data.name,
          content: data.content,
          tags: data.tags,
          type: data.type,
        });
        handleSuccess(res, newPost);
      } else {
        handleErr(res);
      }
    } catch (err) {
      handleErr(res, err);
    }
  },
  async deletePost ({req, res}: IHttpObj): Promise<void> {
    const { url } = req;
    const id = url?.split('/').pop();
    try {
      const post = await Posts.findByIdAndDelete(id);
      if( post ) return handleSuccess<IPost>(res, post);
    } catch (error) {
      handleErr(res);
    }
  },
  async deleteAllPosts ( { res }: IHttpObj ): Promise<void> {
    try {
      await Posts.deleteMany();
      handleSuccess<null>(res, null);
    } catch (error) {
      handleErr(res, error);
    }
  }
};

export default posts;
