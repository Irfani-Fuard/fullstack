// function greating(message){

//     return alert(`${message} everyone..`);

// }

//you can write the above function in a single line using arrow function which is an annonymous function. does not have a function name
//in this function if there are more thanone argument should use paranthesis (message, one, two) else not need ()

let greating = message => alert(`${message} everyone..`);

// greating('Good Evening')
//multiple return statement required cruirly braces and return keyword

let createBlog = (title, body) => {
    
    if(!title){
        throw new Error('A title is required');
    }

    if (!body) {
        throw new Error('Body Cant be empty');
    }

return alert(`${title} - ${body}`);

} 

//createBlog('blog title', 'blog body');

//function without arguments
let srgBlog = () => alert('This function does not heve argumetns');
srgBlog();