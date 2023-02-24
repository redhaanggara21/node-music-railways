const redis = require("redis");

const client = redis.createClient({
  // url: process.env.UPSTASH_HOST,
  // port: process.env.UPSTASH_PORT,
  // password: process.env.UPSTASH_REDIS_REST_TOKEN,
  url:  process.env.UPSTASH_OPRIGIN,
});

client.on('error', err => console.log('Redis Client Error', err));

client.connect();

module.exports = client;