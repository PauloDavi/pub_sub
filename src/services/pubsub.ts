import { PubSub } from '@google-cloud/pubsub';
import { resolve } from 'path';

const pubsub = new PubSub({
  keyFile: resolve(__dirname, '..', '..', 'key.json'),
});

export default pubsub;
