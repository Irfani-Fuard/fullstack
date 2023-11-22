//Restructuring - means turn back global scope variables and methods into objects.
var name = 'Everest';
var height = 8848;
var output = function(){
    console.log(`MT.${this.name} is ${this.height} meter tall `);
}

var adventureClimbing = {name, height, output}
adventureClimbing.output();

//now we will put all the object's properties in side the object
var adClimbing = {
    name: 'Himalaya',
    height: 8848,
   // outputClimbing: function(){ in js6 you no need to use function key word instead can use as follows
   
   outputClimbing(){
        console.log(`MT.${this.name} is ${this.height} meter tall `);
    }
}

adClimbing.outputClimbing();