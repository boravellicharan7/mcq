//Question-1
let trafficLight = "yellow";

if (trafficLight === "green") {
    console.log("Go");
} else if (trafficLight === "yellow") {
    console.log("Slow down");
} else if (trafficLight === "red") {
    console.log("Stop");
} else {
    console.log("Invalid light");
}
//Answer:- B

//Question-2
let balance = 2000;
let minimumBalance = 1500;

if (balance > minimumBalance) {
    console.log("You can withdraw money.");
} else if (balance === minimumBalance) {
    console.log("Warning: Low balance.");
} else {
    console.log("Insufficient balance.");
}
//Answer:- A

//Question-3
const userProfile = {
    name: "Alice",
    age: 30,
    address: {
        street: "123 Main St",
        city: "Wonderland",
        coordinates: {
            lat: 37.7749,
            long: -122.4194
        }
    }
}
console.log(userProfile.address.coordinates.lat);
//Answer:- C

//Question-4
const students = [
    { name: "John", grades: [85, 92, 78] },
    { name: "Jane", grades: [90, 88, 95] },
    { name: "Doe", grades: [75, 80, 70] }
];
console.log(students[1].grades[2]);
//Answer:- 95

//Question-5
const book = {
    title: "JavaScript Basics",
    author: {
        name: "Emily",
        age: 28
    },
    chapters: [
        { title: "Introduction", pages: 10 },
        { title: "Advanced Topics", pages: 15 }
    ]
};
book.author.age = 30;
console.log(book.author.age);
//Answer:- B

//Question-6
const inventory = [
    { item: "Apple", stock: { quantity: 50, price: 0.5 } },
    { item: "Banana", stock: { quantity: 100, price: 0.3 } },
    { item: "Cherry", stock: { quantity: 20, price: 1.0 } }
];
const bananaPrice = inventory[1].stock.price;
console.log(bananaPrice);
//Answer:- B

//Question-7
const product = "Smartphone";
console.log("Product length:", product.length);
console.log("Character at index 5:", product.charAt(5));
//Answer:- C

//Question-8
const firstName = "john";
const lastName = "doe";
const fullName = firstName.toUpperCase().concat(" ", lastName);
console.log(fullName);
//Answer:- C

//Question-9
const sentence = "   JavaScript is awesome!   ";
const trimmedSentence = sentence.trim();
console.log(trimmedSentence.slice(0, 10));
//Answer:- B

//Question-10
const fullNames = "   john  doe   ";
const trimmedName= fullNames.trim();
const upperCase= trimmedName.slice(0,1).toUpperCase()+trimmedName.slice(1,5)+trimmedName.slice(6,7).toUpperCase()+trimmedName.slice(7,9);
console.log(upperCase.length);
console.log(upperCase.slice(5,6));
console.log(upperCase.charCodeAt(6));
console.log(upperCase.slice(0,4));
console.log(upperCase);
//Answer:- 1)A  2)8  3)C  4)111 5)A

//Question-11
let x = 10;
let y = 20;
let result = (x > 5) && (y < 25);
console.log(result);
//Answer:- A

//Question-12
const value = 0;
const results = (value ? "Value is truthy" : "Value is falsy") + (typeof value);
console.log(results);
//Answer:- B

//Question-13
const a = true;
const b = false;
const c = true;
const res = a || b && c;
console.log(res);
//Answer:- A

//Question-14
const age = 22;
const hasID = true;
const isStudent = false;
const canEnterClub = (age >= 21 || (isStudent && age >= 18)) && hasID;
console.log(canEnterClub);
//Answer:- A

//Question-15
function firstFunction() {
    console.log("First Function");
    secondFunction();
}
function secondFunction() {
    console.log("Second Function");
}
setTimeout(function() {
    console.log("Timeout Function");
}, 0);
firstFunction()
//Answer:- A

//Question-16
function greet(name) {
    console.log(`Hello, ${name}!`);
}
setTimeout(greet, 1500, "Alice");
console.log("Greeting will be displayed after 1.5 seconds.");
//Answer:- A

//Question-17
for(i=1;i<=10;i++){
    console.log(i);
}

//Question-18
let fruits=['apple','banana','cherry']
for(ele of fruits){
    console.log(ele);
}

//Question-19
var array=["charan","roy","ocean"]
for(i=array.length-1;i>=0;i--){
    console.log(array[i]);
}

//Question-20
for(i=10;i>=1;i--){
    console.log(i);
}

//Question-21
let userRole = 'editor'; 
switch (userRole) {
    case 'admin':
        console.log("Access Level: Full Access");
        console.log("Can manage users, settings, and content.");
        break;
    case 'editor':
        console.log("Access Level: Edit Access");
        console.log("Can edit and publish content.");
        break;
    case 'viewer':
        console.log("Access Level: View Access");
        console.log("Can view content only.");
        break;
    default:
        console.log("Access Level: No Access");
        console.log("Role not recognized.");
}
//A:- Access Level: Edit Access
//    Can edit and publish content