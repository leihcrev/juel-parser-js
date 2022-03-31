import ohm from 'ohm-js';
import fs from 'fs';
import path from 'path';

const contents = fs.readFileSync(path.resolve(__dirname, 'jurl.ohm'), 'utf-8');
const grammar = ohm.grammar(contents);

function match(target) {
  return grammar.match(target);
}
