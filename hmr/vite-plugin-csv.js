import { parse } from "csv-parse/sync";

export default () => {
    let config = null;

    return {
        name: 'csv',
        configResolved(resolvedConfig) {
            // will be called before "transform" hook
            config = resolvedConfig;
        },
        transform(src, id) {
            // will be called anytime we import any module inside js files
            const columns
                = config.mode === 'development' || config.mode === 'production'

            if (/\.csv$/.test(id)) {
                const records = parse(src, { columns: columns })

                return {
                    code: `export default ${JSON.stringify(records)}`
                }
            }
        },
        async handleHotUpdate(context) {
            // hot module replacement
            if (/\.csv$/.test(context.file)) {
                context.server.ws.send({
                    type: 'custom',
                    event: 'csv-update',
                    data: {
                        url: context.modules[0].url,
                        data: parse(await context.read(), { columns: true })
                    }
                })

                return []
            }
        }
    }
}
