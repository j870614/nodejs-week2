import mongoose from 'mongoose';

const DB: string = 'mongodb://127.0.0.1:27017/post'

console.log('資料庫連線中...');
mongoose.connect(DB)
  .then(() => {
    console.log('資料庫連線成功');
  })
  .catch((err) => {
    console.log('資料庫連線失敗');
    console.log(err.reason);
  })
