//add querry selector to return buttons elements
const alert = document.querySelector('.alert')
const form = document.querySelector('.grocery-form')
const grocery = document.getElementById('#grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// Edit options 
let editElement;
let editFlag = false;
let editID = "";

//implementation of the addEventListener DOM starts here where we add an event handler to the click of the button
//submit form
form.addEventListener('submit', addItem)
 function addItem(e){
    e.preventDefault();
    // console.log(e.currentTarget.grocery.value)
    const value = e.currentTarget.grocery.value;

    //This is to generate some form of unique ID to replace the function lf a counter.
    const id = new Date().getTime().toString();
    if(value !== '' && editFlag === false){console.log("add item to the list")} //or if (value && !editFlag)
    else if(value !== '' && editFlag ===true){console.log("editing")} //or else if (value && editFlag)
   //  else{console.log("empty value")};
else{ displayAlert ("Please enter value", "danger")
 }

//This is where we define the *****FUNCTIONS**** that triggers when the submit button is clikcked 
// function addItem(e) {
//   e.preventDefault();
//     console.log(e.grocery.value);
 }


//  display Alert is coded here
function displayAlert(text, action){
   alert.textContent = text;
   alert.classList.add(`alert-${action}`);

   // remove alert

setTimeout(function(){

   alert.textContent = "";
   alert.classList.remove(`alert-${action}`);

}, 1000);

}