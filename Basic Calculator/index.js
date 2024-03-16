const display = document.getElementById("display");

function showOnDisplay(input){
    display.value += input;
}

function clearScreen(){
    display.value = "";
}

function calculate(){
    try{
        display.value = eval(display.value); 
    }
    catch(error){
        display.value = "Error"
    }
}

function percent(){
    display.value = display.value/10
}