import { ServerResponse } from 'http';
import headers from './headers';
import { IPost } from '../model/posts';

function handleSuccess (res: ServerResponse, data: IPost[]) {
  res.writeHead(200, headers);
  res.write(JSON.stringify({
    status: 'success',
    data,
  }));
  res.end();
};

export default handleSuccess;
