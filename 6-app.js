const hasLicence = true;
const age = 18 ;
const isDrunked = false;

const str = hasLicence && age >= 18 && !isDrunked ? 'Может' : 'Не может';
console.log(str);