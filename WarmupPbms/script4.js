//JavaScript Functions — Warmup Pbms
//Write a function called “addFive”.
//Given a number, “addFive” returns 5 added to that number.


let addFive=(num)=> { 
    return num + 5
}
console.log("Calling Add Five Function:" + addFive(10));

//Write a function called “getOpposite”.
//Given a number, return its opposite

//var data = 5;
let getOpposite=(data)=> {
    if (data === 0)
    return 0

    if (Number.isInteger(data)) {
        return (-data)
    } else {
        return -1
    }
}
console.log("Opposite of 10 is: " + getOpposite(10))
console.log("Opposite of 1.1 is: " + getOpposite(1.1))
console.log("Opposite of a is: " + getOpposite('a'))

//Fill in your code that takes an number minutes and converts it to seconds.
var min = 5;
let toSeconds=(min)=> {
    return min*60;
}
console.log("Converted into :"+toSeconds(min)+" seconds")

//Create a function that takes a string and returns it as an integer.
var mystr = "5";
let toInteger=(mystr) =>{
    return +mystr;
}
console.log("Converted into INT:"+toInteger(mystr))

//Create a function that takes a number as an argument, increments the number by +1 and returns the result.
var myint = 0;
let nextNumber=(myint)=> {
    return myint+1;
}
console.log("increments the number :"+ nextNumber(myint));

//Create a function that takes an array and returns the first element.
var arr = [80, 5, 100];
let getFirstElement=(arr)=> {
    return arr[0];
}
console.log("returns the first element of array:"+ getFirstElement(arr));

//Find the Perimeter of a Rectangle
//Create a function that takes height and width and finds the perimeter of a rectangle.

let findPerimeter=(l,b)=> {
    return 2*(l+b);
}
console.log("Perimeter of a Rectangle:"+findPerimeter(6,7))

//Less Than 100?
//Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

function lessThan100(num1,num2) {
    let sum=num1+num2;
    if(sum<100)
    {
        return true;
    }
    else{
        return false;
    }
}
console.log("Checking sum < 100 ?: "+lessThan100(22,15));

//Old macdonald had a farm: pblm
//var tur=2,horse=4,pigs=4;
let CountAnimals=(tur,horse,pigs)=> {
 return ((2*tur)+(4*horse)+(4*pigs));
}
console.log("Total number of legs of all the animals :"+CountAnimals(2,3,5))

//Write a function called “getFullName”.
//Given a first and a last name, “getFullName” returns a single string with the given first and last names separated by a single space.

let getFullName=(firstName, lastName)=>{
    var concat= firstName+" "+lastName;
    return concat;
   }

console.log("FULL NAME: "+getFullName("GUVI","GEEK")) 

//Write a function called “getProperty”.
//Given an object and a key, “getProperty” returns the value of the property at the given key. If there is no property at the given key, it should return undefined.


var aadhar = {
    name: "Anuja",
   };
   let getProperty=(aadhar,key)=> {
    var pair=aadhar[key];
    return pair;

   }
console.log("OBJECT & KEY: "+getProperty(aadhar,"name"));

// Calculate the sum of numbers received in a comma delimited string
let str = '1.5,2.3,3.1,4,5.5,6,7,8,9,10.9'

let sumCSV = (str) => {

    let stringArray = str.split(',').map(Number)

    console.log(stringArray)

    let sum = stringArray.reduce((currentTotal, item) => {
        return currentTotal + item
    }, 0)
    return sum
}

console.log("Sum of string array: " + sumCSV(str))