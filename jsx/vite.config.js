export default {
  esbuild: {
    jsxFactory: 'create', // our custom fn
    jsxInject: 'import { create } from "/src/create.js"'
  }
}