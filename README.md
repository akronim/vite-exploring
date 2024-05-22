### creating
```bash
nvm use 18
npm create vite@latest
npm install
```

### add vite-plugin-inspect
- https://github.com/antfu-collective/vite-plugin-inspect
```bash
npm i vite-plugin-inspect -D
```
- visit: http://localhost:5173/__inspect/


### add collect.js
```bash
npm install collect.js --save
```

### add tailwind, postcss, autoprefixer
```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

### add Sass
```bash
npm i -D sass
```

### public folder
- files inside it can not be referenced from within source code files like main.js
- files inside it are not processed by vite

### glob function
- to import multiple modules

### jsx support
- by configuring "esbuild" property inside vite.config.js

### typescript
```bash
npm i -D typescript
```
- crate tsconfig.json

### add vite-plugin-checker
- for type checking in worker thread and more
- erros will be reported in browser
```bash
npm i -D vite-plugin-checker
```

### ESLint
#### add typescript-eslint
```bash
npm install --save-dev @typescript-eslint/parser @typescript-eslint/eslint-plugin eslint typescript
```
- create: .eslintignore
- create: .eslintrc.cjs
#### run
```bash
npx eslint .
```

### env
```bash
npm run build -- --mode=staging
```

### library mode
#### link
- lib
```bash
npm link
```
- app
```bash
npm link pluck
```

#### unlink
- app
```bash
npm unlink pluck
```
- lib
```bash
npm uninstall --global
npm unlink --global
npm rm --global pluck
```

#### link info
```bash
npm ls --global pluck
npm ls --link --global
npm ls --global --depth=0
```

#### clear npm cache
```bash
npm cache clear --force
```

### publishing NPM package
#### lib
```bash
npm login
npm publish --access public
npm version patch
```
#### app
```bash
npm install @marinko_m/pluck --save
```

### vs-code file-size extension

### vite-plugin-image-optimizer
```bash
npm install vite-plugin-image-optimizer --save-dev
npm install sharp --save-dev
npm install svgo --save-dev
```

### plugins
https://vitejs.dev/plugins/
https://github.com/vitejs/awesome-vite

### rollup plugins
https://vite-rollup-plugins.patak.dev/
https://github.com/rollup/awesome

### vue integration
```bash
npm install vue @vitejs/plugin-vue
```

### react integration
```bash
npm install react react-dom @vitejs/plugin-react
```