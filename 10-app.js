const arr = [6, 11, -3, 10, 14, 32, 0, 25];

const remove = num => num < 10 ? true : false;

function filter(array, remove) {
	let result = [];
	for (let i = 0; i < array.length; i++) {
        if (!remove(array[i])) {
			result.push(array[i]);
        }
    }
    return result;
}

console.log(filter(arr, remove));