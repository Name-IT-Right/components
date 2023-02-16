// rollup.config.js
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.ts',
  output: {
    dir: 'dist',
    format: 'esm',
    name: 'name-it-right-components'
  },
  external: ['react', 'react/jsx-runtime', '@cloudscape-design/components'],
  plugins: [typescript()]
};