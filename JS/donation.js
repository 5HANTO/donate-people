document.getElementById("donate-btn").addEventListener('click', function(event){
    event.preventDefault();

    const inputMoney = getInputValueById("input-add-money");
    console.log(inputMoney);

    const donationBalance = getInputTextById("donation-money");
    console.log(donationBalance);

    const mainBalance = getInputTextById("main-balance");
        console.log(mainBalance);
    
   
    if(mainBalance > inputMoney){
        const newBalance = inputMoney + donationBalance;
      
        console.log(newBalance);
        alert("Congratulations you have donate " + inputMoney + " tk");
        const myWallet = mainBalance - inputMoney;
        console.log(myWallet);
        inputMoney.innerText = " ";
        

        document.getElementById("donation-money").innerText = newBalance;
        document.getElementById("main-balance").innerText = myWallet;
        
    }
    else{
        alert("You don’t have sufficient balance to complete this payment");
    }
    
})




// Donate section Feni 
document.getElementById("donate-btn2").addEventListener('click', function(event){
    event.preventDefault();

    const inputMoney = getInputValueById("input-add-money2");
    console.log(inputMoney);

    const donationBalance = getInputTextById("donation-money2");
    console.log(donationBalance);

    const mainBalance = getInputTextById("main-balance");
        console.log(mainBalance);
    
   
    if(mainBalance > inputMoney){
        const newBalance = inputMoney + donationBalance;
      
        console.log(newBalance);
        alert("Congratulations you have donate " + inputMoney + " tk");
        const myWallet = mainBalance - inputMoney;
        console.log(myWallet);
        

        document.getElementById("donation-money2").innerText = newBalance;
        document.getElementById("main-balance").innerText = myWallet;
        
    }
    else{
        alert("You don’t have sufficient balance to complete this payment");
    }
    
})



// Donate Section Quota ...............

document.getElementById("donate-btn3").addEventListener('click', function(event){
    event.preventDefault();

    const inputMoney = getInputValueById("input-add-money3");
    console.log(inputMoney);

    const donationBalance = getInputTextById("donation-money3");
    console.log(donationBalance);

    const mainBalance = getInputTextById("main-balance");
        console.log(mainBalance);
    
   
    if(mainBalance > inputMoney){
        const newBalance = inputMoney + donationBalance;
      
        console.log(newBalance);
        alert("Congratulations you have donate " + inputMoney + " tk");
        const myWallet = mainBalance - inputMoney;
        console.log(myWallet);
        

        document.getElementById("donation-money3").innerText = newBalance;
        document.getElementById("main-balance").innerText = myWallet;
        
    }
    else{
        alert("You don’t have sufficient balance to complete this payment");
    }
    
})
