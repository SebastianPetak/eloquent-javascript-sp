let numberOfRows = process.argv[2];
let i = 0;

while(i < numberOfRows) {
	console.log(Array(i + 2).join('#'));
	i++
}

// or

console.log('\nSecond way\n');

let character = '#';

for (let i = 0; i < numberOfRows; i++) {
	console.log(character);
	character += '#';
}
