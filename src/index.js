import soma from './calc.js';
import Heading from './components/heading.js';

console.log("Testando o webpack");

soma(6,9);
soma(123, 321);

const heading = new Heading();

heading.create("Este titulo e dinamico");
heading.create("Hot reload");