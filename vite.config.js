import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
const path = require('path');

// https://vitejs.dev/config/
export default () => {
  return defineConfig({
    plugins: [react()],
    resolve: {
      alias: {
        web3: path.resolve(__dirname, './node_modules/web3/dist/web3.min.js')
      }
    }
  });
};
