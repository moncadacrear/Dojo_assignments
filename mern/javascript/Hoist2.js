(1)
console.log(hello);                                   
var hello = 'world';                                 

// my Prediction would be it would be undefined

(2)

var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}


//it would throw me an error because im calling the function before it function being made ... WRONG answer
// i was wrong it will still run 

(3)
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// it will console long super cool we never use the function 




(4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// the console log will run first chicken then we call the function and it will console log half chicken 

// (5)
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// // i will get an error because mean isnt a function 


(6)
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);


// on the first console log i will get a undefined then we call the function rewind it run the function it will console log on line 65 "rock" and on line 67 console.log "r&b"
// on the last console log it will console.log disco




(7)
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);



// first san jose 
// seattle
// burbank
// san jose 


(8) //bonus
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}

// first console.log is true 
// the second one we'll get an error we cant check the dojo becaues it Immutable