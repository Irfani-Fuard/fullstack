//spread and rest operator
//... we can use this to combine two arrays into one or combine two objects into one
//eg: in a certain situation you have data of a state and want to add aditional data from API in such situation spread will be helpful 
var mountains = ['Everest', 'Fish Tail', 'Annapurna'];
var mountainsFromJapan = ['Fuji'];

var allMountains = [...mountains, ...mountainsFromJapan];
console.log(allMountains);



//spread with object
var day = {
    breakfast: 'bread with jam',
    lunch: 'rice and curry'
}

var night = {
    dinner: 'noodles'
}

var picnic = {...day, ...night}
console.log(picnic);

//rest 
var riversInSriLanka = ['mahaweli ganga', 'sudu ganga', 'kalani ganga', 'Theduru oya'];
//array destructure this can be use in the same way in object also
var [first, ...rest] = riversInSriLanka;
console.log(first);
console.log(rest);