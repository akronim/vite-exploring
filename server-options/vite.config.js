// export default {}

import { defineConfig, loadEnv } from "vite";

export default ({ command, mode, isSsrBuild }) => {
    console.log(command, mode, isSsrBuild);

    // load app-level env vars to node-level env vars
    process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
    console.log(process.env.VITE_DBNAME);

    const env = loadEnv(mode, process.cwd(), "VITE_");
    console.log(env);

    return defineConfig({
        // base: command === 'build' ? '/prod/base/path/' : '/',
        server: {
            port: '3333',
            strictPort: true,
            headers: {
                a: 'b'
            },
            open: 'index.html',
            proxy: {
                //'/products': 'https://dummyjson.com',
                '/api': {
                    target: 'https://dummyjson.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        preview: {
            port: '4444',
            strictPort: true,
            open: '/api/posts',
            proxy: {
                '/api': {
                    target: 'https://dummyjson.com',
                    changeOrigin: true,
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        },
        css: {
            devSourcemap: true
        }
    });
}