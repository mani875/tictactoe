window.addEventListener('load',bindevents);
var buttons;
function bindevents(){
buttons=document.querySelectorAll("button");
buttons.forEach(button =>button.addEventListener("click",printxorzero));
}

var isxorzero  = false;

function printxorzero(){
    var str = "";
    if(this.innerText.trim().length==0){
        str = isxorzero?"X":"0";
   this.innerText = str;  
   isxorzero = !isxorzero;
   document.querySelector("#result").innerText = gameOver()?"Game Over Win By "+str:"";     
}

}
function gameOver(){
    if(checkCount()>=5){
        if(isSameRow(buttons[0].innerText , buttons[1].innerText , buttons[2].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[0].innerText , buttons[3].innerText , buttons[6].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[0].innerText , buttons[4].innerText , buttons[8].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[6].innerText , buttons[4].innerText , buttons[2].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[1].innerText , buttons[4].innerText , buttons[7].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[2].innerText , buttons[5].innerText , buttons[8].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[3].innerText , buttons[4].innerText , buttons[5].innerText)){
            return true;
        }
        else
        if(isSameRow(buttons[6].innerText , buttons[7].innerText , buttons[8].innerText)){
            return true;
        }
    }
    return false;
}
function checkCount(){
    var counter = 0;
    for(let button of buttons){
        if(button.innerText.trim().length>0){
            counter++;
        }
    }
    return counter;
}   
function isSameRow(first,second, third){
    if(isRowNotBlank(first, second, third)){
        if(first==second && first ==third){
            return true;
        }
    }
    return false;
}
const isNotBlank = (str)=>str.trim().length>0;

function isRowNotBlank(first, second, third){
    return isNotBlank(first) && isNotBlank(second) && isNotBlank(third);
}