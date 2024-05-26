// "glob" modules will be dynamically imported, unless: eager: true
const modules = import.meta.glob('./src/scripts/*.js',
    {
        //eager: true
        //as: 'raw'
        //as: 'url'
        //import: 'age'
        //import: 'default'
    }
);

document.addEventListener('click', () => {
    console.log(modules);

    // wont work if eager: true
    Object.values(modules).forEach((module) => {
        module().then((data) => {
            console.log(data)
        })
    })
})