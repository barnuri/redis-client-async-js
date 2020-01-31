"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const RedisClientAsync_1 = require("./RedisClientAsync");
async function test() {
    const client = RedisClientAsync_1.createClient(6379, 'localhost');
    await client.delAsync('key');
    console.log(await client.getAsync('key'));
    await client.setAsync('key', '1');
    console.log(await client.getAsync('key'));
    console.log(await client.getKeyWithFallback('key', async () => new Date().toDateString()));
    console.log(await client.getKeyWithFallback('key', async () => new Date().toDateString()));
    process.exit(0);
}
test();
//# sourceMappingURL=test.js.map