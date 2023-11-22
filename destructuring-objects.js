//here we have to use only 2 variables from this object. therefore we can use destructuring object.
//here i want to use morning and afternoon outof this object
//simply we can assign different value for the object's variable after detructuring it

//Example 1
let thingsToDO = {
    morning: "Excersise",
    afternoon: "work",
    evening: "code",
    night: ["sleep", "dream"]
}

//now ready to destructure
let { morning, afternoon } = thingsToDO;
// reassigning a value
morning = "Run";

console.log(morning, ' - ', afternoon);

//Object Destructuring with fuction argument as object Example 2
let uniStudent = student => {
    console.log(`${student.name} from ${student.universiry}`);
}

//call the function
uniStudent({
    name:'Ryan',
    universiry: 'UOM'
});

//improve above code using destructuring
let uomStudent = campStudent => {
   
//here we are going to destructure variables from campStudent. so we no need to use '.' notation eg: campstudent.name 
let {name, universiry} = campStudent;

    console.log(`${name} from ${universiry}`);
}

uomStudent({
    name: 'Irfani',
    universiry: 'University of moratuwa'
});

//destructure while tacking the argument. here we are taking 2 arguments so we put paranthases
let officeEmployee = ({name, office}) => {
    //let {name, office} =efEmployee;
    console.log(`${name} from ${office}`);
}

officeEmployee({
    name: 'Kamal',
    office: 'Trace'
});