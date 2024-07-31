import { createClient } from 'redis';

// Create a Redis client
const client = createClient();

// Handle connection events
client.on('connect', () => {console.log('Redis client connected to the server')});
client.on('error', (error) => {console.log(`Redis client not connected to the server: ${error.message}`)});
