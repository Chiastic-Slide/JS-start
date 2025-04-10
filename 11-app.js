/* Подскажите, как всё собрать в одну функцию так, чтобы осуществлялись все необходимые проверки.
Как избежать ошибок вроде 31 апреля, 30 февраля и т.п?
Принято ли так называть переменные?
*/

const arr = ['10-02-2022', 'тест', '11/12/2023', '00/13/2022', '41/12/2023', '30-15-2020'];

const filtredByDash = arr.filter(el => el.includes('-'))
.map(el => el.split('-'))
.filter(([day, month, year]) => day > 0 && day <= 31 && month > 0 && month <= 12)
.map(e => e.join('-'));

console.log(filtredByDash);

const filtredBySlash = arr.filter(el => el.includes('/'))
.map(el => el.split('/'))
.filter(([month, day, year]) => month > 0 && month <= 12 && day > 0 && day <= 31)
.map(([month, day, year]) => [day, month, year].join('-'));

console.log(filtredBySlash);

const result = [filtredByDash, filtredBySlash];

for (let i = 0; i < result.length; i++) {
	for (let j = 0; j < result[i].length; j++) {
		console.log(result[i][j]);	
	}
}
