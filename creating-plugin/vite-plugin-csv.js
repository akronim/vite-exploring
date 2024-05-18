import { parse } from "csv-parse/sync";

export default () => {
    let config = null;

    return {
        name: 'csv',
        configResolved(resolvedConfig) {
            // will be called before "transform" hook
            config = resolvedConfig;
        },
        //apply: "serve", // will be applied only in dev mode (also: "build")
        apply(config, { command, mode }) {
            console.log(config, command, mode)
            return mode === 'development' || mode === 'production'
        },
        transform(src, id) {
            // will be called anytime we import any module inside js files

            const columns
                = config.mode === 'development' || config.mode === 'production'

            if (/\.csv$/.test(id)) {
                const records = parse(src, { columns: columns })

                console.log(src, id)
                console.log(records)

                return {
                    code: `export default ${JSON.stringify(records)}`
                }
            }
        },
        transformIndexHtml(html) {
            return html.replace(/<\/body>/, `<script>alert('Hello!')</script></body>`)
        }
    }
}
