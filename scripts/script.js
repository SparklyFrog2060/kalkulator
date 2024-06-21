const res=document.querySelector('#result')

function calculate(value){
    const calculatedValue = eval(value || nulls)
    if(isNaN(calculatedValue)) {
        res.value = "Nie dzieli się przez 0!"
        setTimeout(()=>{
            res.value="";

        },1500);
    }
    else{
        res.value= calculatedValue;
    }
}

function liveScreen(enteredValue){
    if (!res.value){
        res.value = "";
    }
    res.value += enteredValue;
}

