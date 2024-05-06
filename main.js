import '@/02.js';
import '@/assets/05.css';
import '@/assets/06.scss';
import imgUrl from '@/assets/img/javascript.svg';
import imgRaw from '@/assets/img/javascript.svg?raw';
import { template } from '@/12.jsx';

console.log(imgUrl);
console.log(imgRaw);

// "glob" modules will be dynamically imported, unless: eager: true
const modules = import.meta.glob('@/10/*.js',
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

console.log(import.meta.env)