let addressLat = 13;
let addressLong = 9;
let positionLat = 5;
let positionLong = 3;
const width = addressLat - positionLat;
const lenth = addressLong - positionLong;
const distance = Math.sqrt((width ** 2 + lenth ** 2));
console.log(distance);