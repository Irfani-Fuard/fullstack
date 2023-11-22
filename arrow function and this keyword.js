//in js when  creating a fuction it will become a part/ method of global window object
//this key word refers to the inclusive context of the function and point to the global windows object.
//lets create an object called nepal
//here printwithdash function is a part f the nepal object and it is an annonymus fucntion, thats why this keyword pointing to the nepal object
// to make this easy we use arrow function cz it does not own its context and it points enclosive of outer function context


let nepal = {
    //add property
    mountains: ['Everest', 'Fish tail', 'Anapurna'],

    //add method
    printWithDash: function(){
        setTimeout(() => console.log(this.mountains.join(" - ")) , 3000);
    }

};

nepal.printWithDash();