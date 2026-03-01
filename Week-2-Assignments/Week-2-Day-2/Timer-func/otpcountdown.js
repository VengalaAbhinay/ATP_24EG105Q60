console.log("OTP sent Successfully")
let seconds=10;
let intervalId=setInterval(()=>{
    seconds--;
    console.log(`OTP can resend after ${seconds} seconds`);
    if(seconds===0){
        console.log("Resend OTP")
        clearInterval(intervalId)
    }
},1000)