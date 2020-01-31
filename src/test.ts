import { RedisClientAsync, createClient } from './RedisClientAsync';

async function test() {
    const client: RedisClientAsync = createClient(6379, 'localhost');

    await client.delAsync('key');
    console.log(await client.getAsync('key'));
    await client.setAsync('key', '1');
    console.log(await client.getAsync('key'));

    console.log(await client.getKeyWithFallback('key', async () => new Date().toDateString() as any));
    console.log(await client.getKeyWithFallback('key', async () => new Date().toDateString() as any));

    process.exit(0);
}

test();
