(1)
console.log(hello);                                   
var hello = 'world';                                 

// my prediciton  how  the interpreter see it 
var hello;
console.log(hello);
hello = 'world'

// output be undefined






(2)
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// my prediciton  how  the interpreter see it 
var needle;
needle = 'haystack';
test();
function test(){
    var needle ;
    needle = 'magnet';
    console.log(needle)
}
// the output magnet



(3)

var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);


// my prediciton  how  the interpreter see it 

var brendan;
brendan = 'super cool';
function print (){
    brendan = 'only okay';
    console.log(brendan)

}
console.log(brendan)
// output is super cool we never cooled the function 



(4)
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// my prediciton  how  the interpreter see it 
var food ; 
food = 'chicken'
console.log(food);
eat();
function eat(){
    var food; 
    food = 'half-chicken';
    console.log(food);
    food = 'gone'
}
// output in like 78 is chicken ... output in the function call line 79 is half-chicken



(5)
mean();
console.log(food);
var mean = function() {
    food = "chicken";
    console.log(food);
    var food = "fish";
    console.log(food);
}
console.log(food);


// my prediciton  how  the interpreter see it 

mean(); //this is not a function 
console.log(food);
var mean = function(){
    var food ; 
    food = 'chicken';
    console.log(food);
    food = 'fish';
    console.log (food);

}
console.log(food);

// the output would be an error mean is not function 

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

// my prediciton  how  the interpreter see it

var genre;
console.log(genre) // undefined
genre = 'disco';
rewind(); 
function rewind(){
    var genre; 
    genre = 'rock';
    console.log(genre);
    genre = 'r&b';
    console.log(genre);
}
console.log(genre);

// output in line 130 it will be undefined .......
// on  line 132 where the function is called its outout = rock and  r&b
// on line 140 the output =  disco 





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

// my prediciton  how  the interpreter see it

dojo = 'san jose';
console.log(dojo); // undefined
learn();
function learn (){
    var dojo;
    dojo = 'seattle';
    console.log(dojo);
    dojo = 'burbank';
    console.log(dojo);
}
console.log(dojo); //undefined

// output in line 166 and 175 its undefined  WRONG
// output on line 167 the function is called ... seattle and burbank   WRONG

// i was wrong the piece of code it wont run  because the first line of code dojo wasnt defined at all 
// when i ran the code i got a ReferenceError





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
        dojo = "closed for now"; // its a const it cant be change 
    }
    return dojo;
}


// my prediction is line 187 is going to be name = chicago  students = 65 hiring= true
//  188 is closed for now .........WRONG i got it wrong
// the line 197 dojo is a const it cant be altered 