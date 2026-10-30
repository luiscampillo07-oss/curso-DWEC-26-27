import { grades } from './data';
import { average, passed } from './logic';

console.log(`Media: ${average(grades).toFixed(2)}`);
console.log(`Aprobados: ${passed(grades).map((g) => g.student).join(', ')}`);
