document.addEventListener("DOMContentLoaded", function(){
    let button = document.getElementById("submitMail");
    button.disabled = true;
    let input = document.getElementById("email");
    input.onkeyup = function(){
        if(input.value.length > 0){
            return button.disabled= false;
        }else{
            return button.disabled= true;
        }
    }

    document.querySelector("form").onsubmit=function(){
        input.value= ""
        button.disabled= true;
        return false;
    }
})
