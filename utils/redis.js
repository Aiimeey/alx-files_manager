import { createClient } from 'redis';
import { promisify } from 'util';

class RedisClient {
  /**
   * Create new instance RedisClient to redis
   */
  constructor() {
    this.client = createClient();
    this.isConnected = true;
    this.client.on('error', (err) => {
      console.log('Redis client not connected to the server: ', err.toString());
      this.isConnected = false;
    });

    this.client.on('connect', () => {
      this.isConnected = true;
    });
    this.client.connect().catch(err => {
        console.error('Failed to connect to Redis server:', err);
        this.isConnected = false;
      });
  }

  /**
   * check if client connect or not.
   */
  isAlive() {
    return this.isConnected;
  }

  /**
   * Retrieves the value of a given key.
   */
  async get(key) {
    // return promisify(this.client.GET).bind(this.client)(key);
    const ky = await this.client.get(key)
    return ky
  }

  /**
   * set key value with duration is second.
   */
  async set(key, value, duration) {
    await promisify(this.client.SETEX).bind(this.client)(key, duration, value);
    // await this.client.setEx(key, duration, value);
    // await this.client.set(key,value, { EX: duration })
  
}

  /**
   * delete an item is stored.
   */
  async del(key) {
    await promisify(this.client.DEL).bind(this.client)(key);
    // await this.client.del(key);
}
}

const redisClient = new RedisClient();
export default redisClient;
