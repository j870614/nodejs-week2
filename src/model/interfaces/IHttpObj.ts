import { IncomingMessage, ServerResponse } from 'http';

interface IHttpObj {
  req: IncomingMessage;
  res: ServerResponse;
  body?: string;
};

export default IHttpObj;
