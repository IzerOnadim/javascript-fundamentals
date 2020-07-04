import '../styles/index.scss';
import {Car} from './models/car.js';
import $ from 'jquery';

//const must be initialised when declared
const carID = 42;

//Rest parameter allows you to pass array as list of args
//Rest parameter must be last arg
function sendCars(day, ...carIDs) {
    carIDs.forEach(x => console.log(x));
}

//Pass list of args instead of array
sendCars('Thursday', carID, 123, 455);

let carIDs = [123, 456, 789, 679, 900, 300];

let carID1, carID2, carID3, moreCars, remainingCars;
[carID1, carID2, carID3, ...remainingCars] = carIDs;
[,, ...moreCars] = carIDs;

console.log(carID1, carID2, carID3);
console.log(remainingCars);
console.log(moreCars);

let car = {id: 500, style: 'convertible'};

let id, style;
//Outer brackets are necessary for compiler
({id, style} = car);

console.log(id, style);

//Spread syntax - inverse of rest parameter
//Allows you to pass an iterable into several args
//Iterables include strings and arrays
function startCars(car1, car2, car3, ...rest) {
    console.log(car1, car2, car3);
    console.log(rest);
}

let carArr = [100, 200, 300, 400, 500];
let carStr = 'abcde';

startCars(...carArr);
startCars(...carStr);

let c = new Car(12);
console.log(c.id);
console.log(c);

/*------------Data Access Using HTTP--------------*/

//Using XHR
let xhttp = new XMLHttpRequest();

xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        console.log(this.responseText);
    }
};

xhttp.open('GET', '', true);
xhttp.send();

//Using jquery
let promise = $.get('');

promise.then(
    data => console.log('success: ', data),
    error => console.log('error: ', error)
);