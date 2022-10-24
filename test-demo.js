import {
	tokenizer,
	parser,
	transformer,
	codeGenerator,
	compiler,
} from './the-super-tiny-compiler-min.js'

const input = '(add 2 (subtract 4 2))';
let output = compiler(input)

console.log(output);