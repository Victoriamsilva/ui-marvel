import { MD5 } from 'crypto-js';

function generateApiHash() {
  return MD5(
    '1'.concat(import.meta.env.VITE_PRIVATE_KEY as string, import.meta.env.VITE_PUBLIC_KEY as string),
  ).toString();
}

export default generateApiHash;
