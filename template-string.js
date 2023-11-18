let fname = "irfani";
let lname  = 'fuard';
let age = prompt("Guess Irfani's age..");

//old way
// let result = fname + ' '+ lname + ' '+ 'is'+ ' ' + age + ' ' + 'years old';
// alert(result);

//using template string is very usefull for creating api calls in url
let result = `${fname} ${lname} is ${age} years old ..`;
alert(result);