import { ServerResponse } from 'http';

const headers = {
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
  'Content-Type': 'application/json',
};

function handleSuccess (res: ServerResponse, data) {
  res.writeHead(200, headers);
  res.write(JSON.stringify({
    status: 'success',
    data,
  }))
};

function handleErr(res, err?: Error | unknown) {
  res.writeHead(400, headers);
  let message: string  = ''; 
  if (err instanceof Error) {
    message = err.message;
  } else {
    message = '欄位未填寫正確或無此 id'
  }
  res.write(JSON.stringify({
    status: 'false',
    message,
  }))
};

export { headers, handleSuccess, handleErr };