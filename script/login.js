document.getElementById("btn-clack").addEventListener("click", function(){
    //1- get the mobile number input
    const numbertInpyt = document.getElementById("input-number");
    const constactNumber = numbertInpyt.value;
    console.log(constactNumber);
    // 2- get the pin input
    const numberPin = document.getElementById("input-pin");
    const constactPin = numberPin.value;
    console.log(constactPin);
    // 3- match pin & mobile number
    if(constactNumber == "01234567890" && constactPin == "1234"){
        // 3-1 true:::>> alert> homepage
        alert("Mama login success👍😊")

        // window.location.replace("/home.html")
        window.location.assign("/home.html")
    } 

    else {
    // 3-1 false:::>> alert> return
    alert("Murakki Murakki  Tumi Bhul😂")
    return;
    }
    
    
});