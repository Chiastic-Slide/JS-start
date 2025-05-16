const testObject = {
  search: 'Вася',
  take: 10,
};

const fromObjectToString = obj => 
  Object.entries(obj)
  .map(([key, value]) => `${key}=${value}`)
  .join('&');

console.log(fromObjectToString(testObject));