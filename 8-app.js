const password = 'ABCDEFGH';

function crypto(password) {
	const [one, two, ...rest] = password.split('');
	rest.reverse();
	return [...rest, one, two].join('');
}

const cryptedPassword = crypto(password);
console.log(`Зашифрованный пароль: ${cryptedPassword}`);


function check(password, cryptedPassword) {
	const cryptedArr = cryptedPassword.split('');
	const [two, one, ...rest] = cryptedArr.reverse();
	const decrypted = [one, two, ...rest].join('');
	return (password === decrypted);
}
console.log(check(password, cryptedPassword));
console.log(check('ABCDEFGH', 'HGFEDCAB'));
console.log(check('ABCDEFGH', 'password'));