// Помогите, пожалуйста, с проверкой на тип элемента и количеством передаваемых символов (если необходимо).
const card = '4561-2612-1234-5464';

const theLuhnAlgorithm = string => {
	const cardNumber = string.replaceAll('-', '').split('').map(el => Number(el));
	let oddNumbers = [];
	let evenNumbers = [];
		for (let i = 0; i < cardNumber.length; i += 2) {
			oddNumbers.push(cardNumber[i]);
		}
		oddNumbers = oddNumbers.map(el => (el * 2 > 9 ? el * 2 - 9 : el * 2))
		.reduce((acc, value) => acc + value, 0);
		for (let i = 1; i < cardNumber.length; i += 2) {
			evenNumbers.push(cardNumber[i]);
		}
		evenNumbers = evenNumbers.reduce((acc, value) => acc + value, 0);
		return (oddNumbers + evenNumbers) % 10 === 0;
	}
			
console.log(theLuhnAlgorithm(card));
