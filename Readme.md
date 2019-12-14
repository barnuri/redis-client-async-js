use redis offical package with bluebird.promisifyAll, and add typescript interface RedisClientAsync,

https://www.npmjs.com/package/redis

[Repo](https://github.com/barnuri/redis-client-async-js)

# Use

for all cb method add `Async` to the end

```js
import { RedisClientAsync, createClient } from 'redis-client-async';

const client: RedisClientAsync = createClient(6379, 'localhost');
const data = await client.getAsync('key')

// add getKeyWithFallback function
const date = await client.getKeyWithFallback('test', async () => new Date().toDateString());
```
