// (1) problem 
const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

// on line 6 the ouput would be 'Tesla'
// on line 7 the output would be 'Mercedes'






// (2)problem
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName); 


// output on line 25 would give us an error undefined and it will stop the code
//  but if the code were to keep going the ouput on lone 26 will be     elon 





// (3) problem
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);

// output on line 45 will be 12345
// the output on line 46 would throw us an undefined





// (4)problem
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;    //2
const [,,,second] = numbers;  // 5
const [,,,,,,,,third] = numbers;  // 2
//Predict the output
console.log(first == second);
console.log(first == third);

// output on line 61 it will be false
//output on line 62 it will be true 




// (5)problem
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest; //value
const { secondKey } = lastTest; //[1,5,1,8,3,3]
const [ ,willThisWork] = secondKey; //5
//Predict the output
console.log(key);  // output give us value
console.log(secondKey); // output[1,5,1,8,3,3]
console.log(secondKey[0]); // output 1
console.log(willThisWork); //output 5


