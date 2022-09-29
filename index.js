const countDown =()=>{
    
    let hour = hr.value;
    let minutes = min.value;
    let seconds = sec.value;
if (hour == "" || minutes == "" || seconds =="") {
    alert("Input time values please!!!")
}else{

    if (minutes == 0 && hour > 0) {
        hour--
        minutes = 60
    }else if(seconds ==0){
        minutes--
        seconds=60
    }
    seconds--

    hr.value = hour;
    min.value = minutes;
    sec.value= seconds;
    
    if (hour > 0 || minutes > 0 || seconds > 0) {
        bt.disabled = "disabled"
        timer = setTimeout(countDown, 100)
    }else{
        alert("say time up")
    }
}

}

 const stopTime =()=>{  
    clearTimeout(countDown)
 }
// timer = setTimeout("countDown()", 100);

//     return stop;

//     function stop() {
//         if (timer) {
//             timer = 0;
//         }
// }
