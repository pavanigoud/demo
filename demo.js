// console.log("Hello world!!!!!/.............Feature branch")
// const exp = "2m010213520019";
// const exp1 = "20\d{8}019";
// const var1 = '20';
// const var2 = '019';
// // const regex = new RegExp(var1 + "\\d{8}" + var2);
// const regex = new RegExp("^[0-9]*$")
// console.log(regex.test(exp));

// const str = "2571857291729";
// console.log(str.substring(2,5));

// const date = new Date();
// console.log(date);
// console.log(date.getTime());
// console.log(date.getUTCDate());

const moment = require('moment');
console.log(moment.utc().local().format('MM-DD-YY'));
console.log(moment.utc().local().format('HH:mm:ss'));
