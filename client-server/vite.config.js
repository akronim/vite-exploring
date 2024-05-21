import Inspect from "vite-plugin-inspect";

export default {
    plugins: [
        Inspect(),
        {
            configureServer(server) {
                server.ws.on('connection', () => {
                    server.ws.send('connected', 'Connection established');
                })

                server.ws.on('ping', (message, client) => {
                    console.log(message);
                    client.send('pong', 'Hello client!');
                })
            }
        }
    ]
}