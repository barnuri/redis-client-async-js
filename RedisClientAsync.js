"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const redis_1 = tslib_1.__importDefault(require("redis"));
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
bluebird_1.default.promisifyAll(redis_1.default.RedisClient.prototype);
bluebird_1.default.promisifyAll(redis_1.default.Multi.prototype);
function createClient(port, host, options) {
    return redis_1.default.createClient(port, host, options);
}
exports.createClient = createClient;
async function getKeyWithFallback(client, key, fallback, ttlInSecs) {
    let data = await client.getAsync(key);
    if (!data) {
        console.log(`get key from fallback ${key}`);
        data = await fallback();
        client.setAsync(key, data, ttlInSecs);
    }
    else {
        console.log(`get key from cache ${key}`);
    }
    return data;
}
exports.getKeyWithFallback = getKeyWithFallback;
//# sourceMappingURL=RedisClientAsync.js.map