import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'
import path from 'path'

export default {
  esbuild: {
    jsxFactory: 'create', // our custom fn
    jsxInject: 'import { create } from "/src/12-create.js"'
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./**/*.{ts,tsx}"',
      },
    })
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  //envPrefix: 'APP_'
}