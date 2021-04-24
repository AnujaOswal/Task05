//JavaScript Practice problems in JSON(Objects) and List

//Problem 0 :
//Playing with JSON object’s Values:
//Fluffy sorry, Fluffyy is my fav cat and it has 2 catFriends
//Write a code to get the below details of Fluffyy so that
//I can take him to vet.
var cat = {
    name: 'Fluffy',
    activities: ['play', 'eat cat food'],
    catFriends: [
    {
    name: 'bar',
    activities: ['be grumpy', 'eat bread omblet','playing with toys','sleep'],
    weight: 8,
    furcolor: 'white'
    }, 
    {
    name: 'foo',
    activities: ['sleep', 'pre-sleep naps','crawling','playing'],
    weight: 3
    }
    ]
   }
   console.log(cat);

   //Add height and weight to Fluffy
   //Fluffy name is spelled wrongly. Update it to Fluffyy
cat.height=100;
cat.weight=200;
cat.name='Fluffyy';

//List all the activities of Fluffyy’s catFriends.
len=cat.catFriends.length;
for (var i=0;i<len;i++){
    for(var j=0;j<len;j++){
    console.log(cat.catFriends[i].activities[j]);
    }
    }

 //Print the catFriends names.
 //console.log("\t")
 for (var i=0;i<len;i++){
 console.log(cat.catFriends[i].name)
 }

 //Print the total weight of catFriends
 //console.log("\t")
 var total=0
 for (var i=0;i<len;i++){
 total=total+parseInt(cat.catFriends[i].weight)
 }
 console.log("the total weight of catFriends : "+total)

// Update the fur color of bar
 cat.catFriends[0].furcolor='red';


 //Problem 0 : Part B (15 mins):

 //Iterating with JSON object’s Values
 var myCar = {
    make: 'Bugatti',
    model: 'Bugatti La Voiture Noire',
    year: 2019,
    accidents: [
    {
    date: '3/15/2019',
    damage_points: '5000',
    atFaultForAccident: true
    },
    {
    date: '7/4/2022',
    damage_points: '2200',
    atFaultForAccident: true
    },
    {
    date: '6/22/2021',
    damage_points: '7900',
    atFaultForAccident: true
    }
    ]
   }
   //1. Loop over the accidents array. Change atFaultForAccident from true to false.
   var len=myCar.accidents.length;
   for (var i=0;i<len;i++){
   myCar.accidents[i].atFaultForAccident="false";
   
   //2. Print the dated of my accidents

   console.log(myCar.accidents[i].date);
   }
   console.log(myCar)

   //Problem 1 (5 mins):
//Parsing an JSON object’s Values:

var obj = {name : "RajiniKanth", age : 33, hasPets : false};
function printAllValues(obj) {
 // your code here
 let newArray=[];
    newArray.push(obj.name,obj.age,obj.hasPets);
    return newArray;
}
console.log(printAllValues(obj));

//Problem 2(5 mins) :
//Parsing an JSON object’s Keys:
//Write a function called “printAllKeys” which returns an newArray of all the input object’s keys.

var obj = {"name" : "RajiniKanth", "age" : 25, "hasPets" : true};

function printAllKeys(obj) {
    let newArray=[];
 for(let i in obj)
 {
     newArray.push(i);
 }
 return newArray;
}

console.log(printAllKeys(obj));

//Problem 3( 7–9 mins): Parsing an JSON object and convert it to a list:
var obj = {name: "ISRO", age: 35, role: "Scientist"};
function convertListToObject(obj) {
 // your code here
 return Object.keys(obj).map(e => [e, obj[e]])
}

console.log(convertListToObject(obj))


//Problem 4( 5 mins): Parsing a list and transform the first and last elements of it:
var arr = ["GUVI", "I", "am", "a geek"];

function transformFirstAndLast(arr) {
    var newObject={};
    var x=arr[0];
    newObject[x]=arr[arr.length-1];
    return newObject;
}

console.log(transformFirstAndLast(arr));