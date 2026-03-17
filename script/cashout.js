document.getElementById("cashout-btn").addEventListener("click", function(){
    //1- get agent number & validate
    const cashoutNumberInput = document.getElementById("Cashout-number");
    const cashoutNumber= cashoutNumberInput.Value;
    console.log(cashoutNumber);
    // 2- get the amount , validate , convert to Number
    // 3- get the current Balance , validate , convert to Number
    // 4- Calculate new Balance 
    // 5- Get the pin and verify
    // 5-1 true:: show an alert > set Balance
    // 5-2 true:: show an error alert > return
});