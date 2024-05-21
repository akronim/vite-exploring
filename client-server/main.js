// import.meta.hot - not available in production build
if (import.meta.hot) {
    import.meta.hot.on('connected', (message) => {
        console.log(message);
        import.meta.hot.send('ping', 'Hello server!');
    })

    import.meta.hot.on('pong', (message) => {
        console.log(message);
    })
}