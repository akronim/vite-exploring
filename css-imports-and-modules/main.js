import './src/assets/main.css';
import styles from './src/assets/main.css?inline';
import { heading as headingColor } from './src/assets/styles-a.module.css';
import stylesB from './src/assets/styles-b.module.css';

console.log(styles);
console.log(headingColor);
console.log(stylesB);

document.querySelector('.heading').className = `${headingColor} ${stylesB.heading}`