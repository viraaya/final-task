import { parse } from 'k6';
import { render } from 'https://jslib.k6.io/k6-summary/0.0.1/index.js';
import summaryData from './result.json';

console.log(render(parse(JSON.stringify(summaryData)), { 'output': 'human' }));
