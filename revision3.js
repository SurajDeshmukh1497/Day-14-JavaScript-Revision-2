

//  event delegation
var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the form
form.addEventListener(
  "input",
  function (event) {
    // Log the field that was changed
    console.log(event.target);
  },
  false
);

//clear timeout.

<script>
var msg;
function greeting() {
   alert('Good morning');
}
function start() {
  msg =setTimeout(greeting, 3000);

}

// function stop() {
    clearTimeout(msg);
}
// </script>

// How do you redirect new page in javascript
function redirect() {
    window.location.href = "newPage.html";
  }


//validate an email in javascript
function validateEmail(email) {
    var re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const user = {
    name: "John",
  };

console.log("name" in user);
console.log(user.hasOwnProperty("name")); // true


var object = {
    k1: "value1",
    k2: "value2",
    k3: "value3",
  };

for (var key in object){
    if (object.hasOwnProperty(key)) {
        console.log(key + object[key]);
    }
}

Object.entries(obj).length === 0 && obj.constructor === Object; 
Object.keys(obj).length === 0 && obj.constructor === Object;
// Since date object length is 0, you need to check constructor check as well

// first letter of the string in an uppercase
string.charAt(0).toUpperCase() + string.slice(1);

// date
new Date()
date.getTime() //compare date value

string.startsWith("string");

"  Hello World   ".trim(); //.trim()

var object = {
    k1: "value1",
    k2: "value2",
    k3: "value3",
  };
  
  object.k4 = "value4";

  console.log(object);

  
//   var a = b || c; // assign default value
  
  var str =
  "This is a \n\ very lengthy \n\ sentence!"; //
   \n for multiline string
console.log(str);

function.length syntax to find the number of parameters


Assign {} instead of new Object()
Assign "" instead of new String()
Assign 0 instead of new Number()
Assign false instead of new Boolean()
Assign [] instead of new Array()
Assign /()/ instead of new RegExp()
Assign function (){} instead of new Function()
You can define them as an example,

var v1 = {};
var v2 = "";
var v3 = 0;
var v4 = false;
var v5 = [];
var v6 = /()/;
var v7 = function () {};

Math.random() 
Math.floor() to return random integers



There are six string methods: search(), replace(),
replaceAll(), match(), matchAll(), and split().

var msg = "Hello John";
var n = msg.search(/John/i); // 6

var msg = "ball bat";
var n1 = msg.replace(/b/i, "c"); // call bat
var n2 = msg.replaceAll(/b/i, "c"); // call cat

var msg = "Hello John";
var n1 = msg.match(/[A-Z]/g); // ["H", "J"]
var n2 = msg.matchAll(/[A-Z]/g); // this returns an iterator

var msg = "Hello John";
var n = msg.split(/\s/); // ["Hello", "John"]

//regular expression object
var regexp = new RegExp("\\w+");
console.log(regexp);
// expected output: /\w+/


var pattern = /you/;
console.log(pattern.test("How are you?")); //true

var pattern = /you/;
console.log(pattern.exec("How are you?")); 
//["you", index: 8, input: "How are you?", groups: undefined]

// image width and height using JS
var img = new Image();
img.onload = function () {
  console.log(this.width + "x" + this.height);
};
img.src = "http://www.google.com/intl/en_ALL/images/logo.gif";

XMLHttpRequest object which can be used to 
make synchronous HTTP requests from JavaScript

// convert date to another timezone in javascript
console.log(event.toLocaleString("en-GB", { timeZone: "UTC" })); //29/06/2019, 09:56:00

// size of the window
var width =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

var height =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;


//   ways to execute javascript after page load

window.onload = function ...
document.onload = function ...
<body onload="script();"></body>

// freeze method
Object.freeze(obj);


// detect browser langugae
var language =
  (navigator.languages && navigator.languages[0]) || // Chrome / Firefox
  navigator.language || // All browsers
  navigator.userLanguage; // IE <= 10

console.log(language);

// You can use the <noscript> tag to detect javascript disabled or not


//rest parameters
function f(a, b, ...theArgs) {
    // ...
  }

//Object.isFrozen() method 
//is used to determine if an object is frozen or not

// The Object.is() method 
// determines whether two values are the same value

Object.assign(target, ...sources);
const target = { a: 1, b: 2 };
const source = { b: 3, c: 4 };

const returnedTarget = Object.assign(target, source);

console.log(target); // { a: 1, b: 3, c: 4 }

console.log(returnedTarget); // { a: 1, b: 3, c: 4 }

var p = new Proxy(target, handler);

The Object.seal() method is used to seal an object, 
by preventing new properties from being added to it 
and marking all existing properties as non-configurable.

The Object.isSealed() method is used to determine if an object is sealed or not.