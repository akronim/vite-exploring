import Inspect from 'vite-plugin-inspect'
import checker from 'vite-plugin-checker'

export default {
  esbuild: {
    jsxFactory: 'create', // our custom fn
    jsxInject: 'import { create } from "/src/12-create.js"'
  },
  plugins: [
    Inspect(),
    checker({
      typescript: true
    })
  ],
}