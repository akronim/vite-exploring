import path from 'path'

console.log(path.resolve(__dirname, './src'))

export default {
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src')
        }
    }
}