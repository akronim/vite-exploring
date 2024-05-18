import { parse } from "csv-parse/sync";
import Inspect from "vite-plugin-inspect";

export default {
    plugins: [
        Inspect(),
        {
            name: 'vite:csv',
            // will be called anytime we import any module inside js files
            async transform(src, id) {
                if (/\.csv$/.test(id)) {
                    const records = parse(src, { columns: true })

                    console.log(src, id)
                    console.log(records)

                    return {
                        code: `export default ${JSON.stringify(records)}`
                    }
                }
            }
        }
    ]
}