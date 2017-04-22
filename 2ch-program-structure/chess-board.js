const size = process.argv[2]
let finishedRows = [];
let currentTile = '';

let addtile = () => {
	if (currentTile == ' ') {
		currentTile = '#';
		return ' ';
	} else {
		currentTile = ' ';
		return '#';
	}
}

while (finishedRows.length < size) {
	if (finishedRows.length % 2 !== 0) {
		currentTile = '#';
	} else {
		currentTile = ' ';
	}
	let currentRow = '';

	while (currentRow.length < size) {
		currentRow += addtile(currentRow);
	}
	
	finishedRows.push(currentRow);
	currentRow = [];
}

console.log(finishedRows.join('\n'));
