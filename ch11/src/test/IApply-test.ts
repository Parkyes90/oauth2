import { Identity } from '../classes/identity';

const add = (x) => (y) => x + y;
const id = new Identity(add);

console.log(id.ap(1).ap(2).value());