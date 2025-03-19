const RUB_USD = 0.011;
const RUB_EUR = 0.01;
const USD_RUB = 90;
const USD_EUR = 0.92;
const EUR_RUB = 97.2;
const EUR_USD = 1.08;

function convertCurrency(amount, baseCurrency, targetCurrency) {
    switch (true) {
        case baseCurrency === 'RUB' && targetCurrency === 'USD':
            return amount * RUB_USD; 
        case baseCurrency === 'RUB' && targetCurrency === 'EUR':
            return amount * RUB_EUR;
        case baseCurrency === 'USD' && targetCurrency === 'RUB':
            return amount * USD_RUB;
        case baseCurrency === 'USD' && targetCurrency === 'EUR':
            return amount * USD_EUR;
        case baseCurrency === 'EUR' && targetCurrency === 'RUB':
            return amount * EUR_RUB;
        case baseCurrency === 'EUR' && targetCurrency === 'USD':
            return amount * EUR_USD;
        default:
            return null;
        }
    }

console.log(convertCurrency(1000, 'RUB', 'USD'));
console.log(convertCurrency(500, 'EUR', 'RUB'));
console.log(convertCurrency(2000, 'RUB', 'GBP'));