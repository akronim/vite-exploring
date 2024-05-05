import './src/02.js';
import './src/assets/05.css';
import './src/assets/06.scss';
import imgUrl from './src/assets/img/javascript.svg';
import imgRaw from './src/assets/img/javascript.svg?raw';
import { template } from './src/12.jsx';

console.log(imgUrl);
console.log(imgRaw);

// "glob" modules will be dynamically imported, unless: eager: true
const modules = import.meta.glob('./src/10/*.js',
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
    Object.values(modules).forEach((module) => {
        module().then((data) => {
            console.log(data)
        })
    })
})

console.log(template.outerHTML);
document.querySelector('#app').appendChild(template);