screen = document.getElementById("screen")
var result = false
function input(x){
    switch (x.value) {
        case "=":
            if(screen.value){
                screen.value = eval(screen.value)
            }   
            else 
                screen.value =0;
            result=true;
            break;
        case "AC":
            screen.value = ""
            break;
        case "del":
            screen.value = screen.value.slice(0,-1)
            break;
        default:{
            if ((result) && !(isNaN(x.value))){
                screen.value = x.value;
                }
            else
                screen.value += x.value;
            result = false
        }

    }  
}