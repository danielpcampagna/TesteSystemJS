import {Person} from './person';
import moment from 'moment';

let person = new Person();
console.log(person.name);

const m1 = moment().format('LLL');
const m2 = moment().fromNow();
console.log(`The moment is ${m1}, which was ${m2}`);
