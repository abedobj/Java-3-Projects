//set initial count value

let count = 0;

//add querry selector to return values and buttons elements
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

console.log(btns)

//implementation of the ForEach DOM to call a function for each element within the array

btns.forEach(function(btn) {

   btn.addEventListener("click", function(e){ //implementation of the addEventListener starts here where we add an event handler to the clickd of the button
    
    const styles = e.currentTarget.classList;
    if (styles.contains('decrease')){
        count--;
    }
    else if(styles.contains('increase')){
        count++;
    }
    else{
        count = 0
    }
    if (count > 0){
        value.style.color = "green";
    }
    else if(count < 0){
        value.style.color = "red";
    }
    else{
        value.style.color = "black"
    }
    value.textContent = count;
   })
     }
    
   

)

 



