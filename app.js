let addressLat = 13;
let addressLong = 9;
let positionLat = 5;
let positionLong = 3;
const width = addressLat - positionLat;
const length = addressLong - positionLong;
const distance = Math.sqrt((width ** 2 + length ** 2));
console.log(distance);
