// var jack = 10;

// while (jack < 60) {
//     console.log(jack);
//     jack++;
// };


// ****************************

// var string = 'hello';
// var count = 0;

// while (count < string.length) {
//     console.log(string[count]);
//     count++;
// }

// *******************************

// var jackFriends = ['Josh','Chris','Dustin'];

// for (var i = 0; i<jackFriends.length; i++) {
//     alert (jackFriends[i]);
// }


// *******************************

// var jack = ['Josh','Chris','Dustin'];
// var i = 0

// while (i < jack.length) {
//     console.log(jack[i]);
//     i++;
// }

// ******************************* REVERSE PRINT

// function printReverse(arr){
//     for(var i = arr.length -1 ; i>=0; i--) {
//         console.log(arr[i]);
//     }
// }

// printReverse([3,4,5,6,7]);

//************************ comparing them but didn't work, return doesn't work but console.log does?

// function isUniform(arr) {
//     var first = arr[0];
//     for (var i = 1; i < arr.length; i++) {
//         if (arr[i] !== first) {
//             return false;
//         }
//     }
//     return true;
// }

// isUniform([3,4,5,6,7]);


//***************************** adding array elements

// function sumArray(arr) {
//     var total = 0;
//     arr.forEach(function(element){
//         total += element;
//     });
//     console.log(total);
    
// }


// sumArray([1,20,3]);

// function change() {
//     document.getElementById('p1').innerHTML = "couldn't figure out";
// }

//***************************
// var one = 1;
// var two = 2;
// function basic() {
//  var result = one + two;
//  console.log (result);
// }

// basic();

//*********************** */

// function squared(num) {
//     console.log( num * num);
//   }

//   squared(3);

//************************************ */

// var h1 = document.querySelector('h1');

// h1.style.color = "pink";

//*************************************** */

// var body = document.querySelector('body');
// var isBlue = false;

// setInterval(function() {
//   if (isBlue) {
//     body.style.background = "green";
//   } else {
//     body.style.background = "purple";
//   }
//   isBlue =!isBlue;
// }, 1000);

//****************************** */

// let set = 0;

// let nums = [10,20,30,40,50];

// for (i = 0; i < nums.length; i++) {
  
//   console.log(set += nums[i]);
// }
// console.log(set);

//*********************************

// let count = 30;

// while (count <20 ) {
//   console.log(count++);
// }

// if (count > 20) {
//   console.log(count += 100)
//   alert ("you made it");
// }

//************************************* */

// var change = document.querySelector('.two');


// change.style.background = "red";

// ************************************** setTimeout

// function flash() {
//   var change = document.querySelector('.two');
  
//   setTimeout(function(){
//       change.style.background = "blue";
//   }, 2000)
// }

// flash();


// var change = document.querySelector('h1');

// change.textContent = "Jack Rulz!"

//***************************************************** */

var logo = document.querySelector('a');

logo.setAttribute('src',"https://www.nationalgeographic.com/content/dam/animals/thumbs/rights-exempt/mammals/d/domestic-dog_thumb.jpg");