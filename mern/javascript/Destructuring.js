// // problem #1

// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// //Predict the output
// // the variable RandomCar is going to be Tesla output and the other variable OtherRandomCar its output is going to be Mercedes
// console.log(randomCar)
// console.log(otherRandomCar)



// // problem #2
// const employee = {
//     name: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { name: otherName } = employee;
// //Predict the output 
// // on the console log name i will get an error name isnt defined 
// // on the second console log i will get Elon 
// // console.log(name);
// console.log(otherName);



// problem #3
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// //  the first console lo gi predict i will get the string variable '12345'
// // i think it would be the same the hashedPassword i got it wrong!!!!
// // the real answer on the second console log it was undefined because the object person doesnt have the person inside 
// console.log(password);
// console.log(hashedPassword);


// // problem #4
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// // both are boolean the first one is going to be false firs = 2 does not equal to second(3) which make it false
// // the second console log is 2 == 2 which make it true 

// console.log(first == second);
// console.log(first == third);






const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
//

console.log(key); //output will be 'value' 
console.log(secondKey); // output will have  the arry [1,5,1,8,3,3]
console.log(secondKey[0]); // output will be 1
console.log(willThisWork); // if i think it will it will have 5 as it output 


