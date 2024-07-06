// // ------------------------------------- NUMBER GUESSING GAME ------------------------------------- //

// const minNum = 1;
// const MaxNum = 100;
// const answer = Math.floor(Math.random() * (MaxNum - minNum + 1)) + minNum;

// let attempts = 0;
// let guess;
// let running = true;

// while (running) {
//     guess = prompt(`Guess a number between ${minNum} and ${MaxNum}`);
//     guess = Number(guess);
//     attempts++;
//     if (isNaN(guess)) {
//         window.alert("Please enter a number: ");
//     } else if (guess < minNum || guess > MaxNum) {
//         window.alert("Failed. Please enter a number between 1 and 100: ");
//     } else if (guess === answer) {
//         running = false;
//         window.alert(` You guessed the number in ${attempts} attempts!`);
//     } else if (guess < answer) {
//         window.alert("low. Please try again: ");
//     } else if (guess > answer) {
//         window.alert("high. Please try again: ");
//     }
// };

// document.addEventListener("DOMContentLoaded", function () {
//     let C_to_F = document.getElementById("Celcius_to_Fahreinheit");
//     let F_to_C = document.getElementById("Fahreinheit_to_Celcius");
//     let K_to_C = document.getElementById("Kelvin_to_Celcius");
//     let user_input = document.getElementById("user_input");
//     let output = document.getElementById("output");

//     function convert() {
//         if (C_to_F.checked) {
//             let celsius = parseFloat(user_input.value).toFixed(2);
//             let fahrenheit = (celsius * 9 / 5) + 32;
//             output.textContent = fahrenheit + " °F";
//         } else if (F_to_C.checked) {
//             let fahrenheit = parseFloat(user_input.value).toFixed(2);
//             let celsius = (fahrenheit - 32) * 5 / 9;
//             output.textContent = celsius + " °C";
//         } else if (K_to_C.checked) {
//             let Kelvin = parseFloat(user_input.value).toFixed(2);
//             let celsius = Kelvin - 273.15;
//             output.textContent = celsius + "°C"
//         } else {
//             output.textContent = "Select a unit";
//         } if (C_to_F.checked && F_to_C.checked) {
//             location.reload();
//         }
//     }

//     window.convert = convert; // Make the convert function accessible from the HTML button onclick
// });

// document.addEventListener("DOMContentLoaded", function () {

//     function generate(length, includeLower, includeUpper, includeChars, includeNumbers) {
//         const output = document.getElementById("output");

//         const lower = "abcdefghijklmnopqrstuvwxyz";
//         const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//         const chars = "!@#$%^&*()-_=+{}[]|\\:;\"'<>,.?/~`";
//         const numbers = "1234567890";

//         let allowedChars = "";
//         let password = "";

//         if (includeLower) allowedChars += lower;
//         if (includeUpper) allowedChars += upper;
//         if (includeChars) allowedChars += chars;
//         if (includeNumbers) allowedChars += numbers;

//         if (length < 1) {
//             output.textContent = "Password length should be at least 1!";
//             return;
//         }

//         if (!allowedChars) {
//             output.textContent = "Please select at least one character set!";
//             return;
//         }

//         for (let i = 0; i < length; i++) {
//             let randomIndex = Math.floor(Math.random() * allowedChars.length);
//             password += allowedChars[randomIndex];
//         }

//         output.textContent = `Your password is => ${password}`;
//         return password;
//     }

//     const generateButton = document.getElementById("generateButton");

//     generateButton.addEventListener("click", function () {
//         const length = parseInt(document.getElementById("length").value);
//         const includeLower = document.getElementById("include_lower").checked;
//         const includeUpper = document.getElementById("include_upper").checked;
//         const includeChars = document.getElementById("include_chars").checked;
//         const includeNumbers = document.getElementById("include_numbers").checked;

//         generate(length, includeLower, includeUpper, includeChars, includeNumbers);
//     });
// });

// document.addEventListener("DOMContentLoaded", function () {
//   function update_clock() {
//     let now = new Date();
//     let hours = now.getHours().toString().padStart(2, 0);

//     let meridiem = hours <= 12 ? "AM" : "PM"
//     hours = hours % 12 || 12;
//     hours = hours.toString().padStart(2, 0);

//     let minutes = now.getMinutes().toString().padStart(2, 0);
//     let secondes = now.getSeconds().toString().padStart(2, 0);

//     let TimeString = `${hours}:${minutes}:${secondes} ${meridiem}`;

//     document.getElementById("clock-container").textContent = TimeString;
//   }

//   update_clock();
//   setInterval(update_clock, 1000);
// });

// function Red() {
//   document.body.style.backgroundColor = "red";
// }

// function Green() {
//   document.body.style.backgroundColor = "green";
// }

// function Blue() {
//   document.body.style.backgroundColor = "blue";
// }

// function Black() {
//   document.body.style.backgroundColor = "black";
//   document.body.style.color = "white";
// }

// function Random() {
//       let rendomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
//       document.body.style.backgroundColor = rendomColor;
//       document.body.style.color = getTextColor(rendomColor)

//       function getTextColor(bgcolor) {
//             let r = parseInt(bgcolor.slice(1, 3), 16);
//             let g = parseInt(bgcolor.slice(3, 5), 16);
//             let b = parseInt(bgcolor.slice(5, 7), 16);
//             let brightness = (r * 299 + g * 587 + b * 114) / 1000;
//             return brightness > 125 ? "#000000" : "#FFFFFF";
//       }
// }

// function Default() {
//   document.body.style.backgroundColor = "white";
//   document.body.style.color = "black";
// }

// document.getElementById("one").addEventListener("click", Red);
// document.getElementById("two").addEventListener("click", Green);
// document.getElementById("three").addEventListener("click", Blue);
// document.getElementById("four").addEventListener("click", Black);
// document.getElementById("random").addEventListener("click", Random);
// document.getElementById("default").addEventListener("click", Default);

// const input = document.getElementById("input");

// function reverseString(str) {
//   return str.split("").reverse().join("");
// }

// function check() {
//   const value = input.value;
//   const reverse = reverseString(value);

//   if (value === reverse) {
//     alert("P A L I N D R O M E");
//   } else {
//     alert("Not today!");
//   }

//   input.value = "";
// }

// let display = document.getElementById("display");
// let timer = null;
// let startTime = 0;
// let elapsedTime = 0;
// let isRunning = false;

// function start() {
//   if (!isRunning) {
//     startTime = Date.now() - elapsedTime;
//     timer = setInterval(update, 10);
//     isRunning = true;
//   }
// }

// function stop() {
//   if (isRunning) {
//     clearInterval(timer);
//     elapsedTime = Date.now() - startTime;
//     isRunning = false;
//   }
// }

// function reset() {
//   clearInterval(timer);
//   startTime = 0;
//   elapsedTime = 0;
//   isRunning = false;
//   display.textContent = "00:00:00:00";
// }

// function update() {
//   const currentTime = Date.now();
//   elapsedTime = currentTime - startTime;

//   let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
//   let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
//   let seconds = Math.floor((elapsedTime / 1000) % 60);
//   let milliseconds = Math.floor((elapsedTime % 1000) / 10);

//   hours = String(hours).padStart(2, "0");
//   minutes = String(minutes).padStart(2, "0");
//   seconds = String(seconds).padStart(2, "0");
//   milliseconds = String(milliseconds).padStart(2, "0");

//   display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`;
// }

// document.addEventListener("DOMContentLoaded", function () {
//   let myUl = document.getElementById("myUl");
//   let span = document.querySelector("span");

//   span.onclick = function newElement() {
//     let li = document.createElement("li");
//     let inputValue = document.getElementById("myInput").value;
//     let t = document.createTextNode(inputValue);
//     li.appendChild(t);
//     if (inputValue === "") {
//       alert("You must write something!");
//     } else {
//       myUl.appendChild(li);
//     }
//     document.getElementById("myInput").value = "";
//   };
// });


console.log("Hello Shahd!!!");
