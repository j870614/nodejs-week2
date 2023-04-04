"use strict";
const headers = {
    'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'PATCH, POST, GET, OPTIONS, DELETE',
    'Content-Type': 'application/json',
};
function handleSuccess(res, data) {
    res.writeHead(200, headers);
    res.write(JSON.stringify({
        status: 'success',
        data,
    }));
}
;
function handleErr(res, err) {
    res.writeHead(400, headers);
    let message = '';
    if (err) {
        message = err;
    }
    else {
        res.write(JSON.stringify({
            status: 'false',
            message,
        }));
    }
}
