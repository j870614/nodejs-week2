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
  },
  async updatePost ( { req, res, body }: IHttpObj ): Promise<void> {
    const { url } = req;
    const id = url?.split('/').pop();
    try {
      if (!body) {
        return handleErr(res);
      }
      const updateData = <IPost>JSON.parse(body);
      const post = await Posts.findByIdAndUpdate(id, updateData, { new: true } ); 
      // { new: true } 的設定表示回傳的物件為更新過的內容。 預設值為 false 表示回傳的物件為更新前的內容
      if ( post ) return handleSuccess<IPost>(res, post);
    } catch (error) {
      handleErr(res);
    }
  }
};

export default posts;
