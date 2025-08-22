// // server.js
// const express = require('express');
// const cors = require('cors');
// const {
//   createClient
// } = require('redis');

// const app = express();
// app.use(cors());

// const redisClient = createClient({
//   url: 'redis://default:yourpassword@redis-xxxx.cxx.region.ec2.redns.redis-cloud.com:port'
// });

// redisClient.connect();

// app.get('/api/data', async (req, res) => {
//   const cached = await redisClient.get('myKey');
//   if (cached) {
//     return res.json({
//       source: 'cache',
//       data: JSON.parse(cached)
//     });
//   }

//   const freshData = {
//     message: 'Hello from Redis Cloud!'
//   };
//   await redisClient.set('myKey', JSON.stringify(freshData), {
//     EX: 3600
//   });
//   res.json({
//     source: 'server',
//     data: freshData
//   });
// });

// app.listen(3001, () => console.log('Backend running on port 3001'));

import {
  createClient
} from 'redis';

const client = createClient({
  username: 'default',
  password: 'hwWRFhIoDxqUlC3oF6F7T7W14j08um9x',
  socket: {
    host: 'redis-12806.c16.us-east-1-2.ec2.redns.redis-cloud.com',
    port: 12806
  }
});

client.on('error', err => console.log('Redis Client Error', err));

await client.connect();

await client.set('foo', 'bar');
const result = await client.get('foo');
console.log(result) // >>> bar

// redis - cli - u redis: //default:hwWRFhIoDxqUlC3oF6F7T7W14j08um9x@redis-12806.c16.us-east-1-2.ec2.redns.redis-cloud.com:12806
