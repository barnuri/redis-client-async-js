"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const redis_1 = tslib_1.__importDefault(require("redis"));
const bluebird_1 = tslib_1.__importDefault(require("bluebird"));
bluebird_1.default.promisifyAll(redis_1.default.RedisClient.prototype);
bluebird_1.default.promisifyAll(redis_1.default.Multi.prototype);
const getKeyWithFallback = (client) => async (key, fallback, ttlInSecs) => {
    let data = await client.getAsync(key);
    if (!data) {
        data = await fallback();
        if (ttlInSecs) {
            await client.setAsync(key, data, 'EX', ttlInSecs);
        }
        await client.setAsync(key, data);
        return { data, fromCache: false };
    }
    return { data, fromCache: true };
};
function createClient(port, host, options) {
    const client = redis_1.default.createClient(port, host, options);
    bluebird_1.default.promisifyAll(client);
    client.getKeyWithFallback = getKeyWithFallback(client);
    return client;
}
exports.createClient = createClient;
//# sourceMappingURL=RedisClientAsync.js.map