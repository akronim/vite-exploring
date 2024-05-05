import collect from "collect.js";
import jsonData from '../src/assets/07.json';
import jsonDataUrl from '../src/assets/07.json?url';

console.log(
    collect([1, 3, 3, 7]).avg()
);

console.log(jsonData);
console.log(jsonDataUrl);