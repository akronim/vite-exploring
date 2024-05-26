import { template } from './src/file.jsx';

console.log(template.outerHTML);
document.querySelector('#app').appendChild(template);