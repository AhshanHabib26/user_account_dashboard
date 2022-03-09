document.getElementById('depositBtn').addEventListener('click', function(){
    const depositInput = document.getElementById('depositInput');
    const depositInputValue = parseFloat(depositInput.value);


    if( depositInputValue > 0){
        const depositText = document.getElementById('depositTxt');
        const depositTextValue = parseFloat(depositText.innerText)
        const totalAmount = depositInputValue + depositTextValue;
        depositText.innerText = totalAmount
    
    
        const balanceText = document.getElementById('balanceTxt')
        const balanceTextValue = parseFloat(balanceText.innerText)
        const totalBalance = depositInputValue + balanceTextValue
         balanceText.innerText = totalBalance
    }
    else{
        showWarningMsg('warning_msg')
    }
     depositInput.value = '';
})

document.getElementById('withdrawBtn').addEventListener('click', function(){

        const withdrawInput = document.getElementById('withdrawInput');
        const withdrawInputValue = parseFloat(withdrawInput.value);
        const totalAmount =document.getElementById('balanceTxt');
        const totalAmountValue = parseFloat(totalAmount.innerText);

    
        if( withdrawInputValue > 0 && withdrawInputValue <= totalAmountValue){
            const withdrawText = document.getElementById('withdrawTxt')
            const withdrawTextValue = parseFloat(withdrawText.innerText)
            const totaWithdrawAmount = withdrawInputValue + withdrawTextValue;
            withdrawText.innerText = totaWithdrawAmount;
        

           const totalAmount =document.getElementById('balanceTxt');
           const totalAmountValue = parseFloat(totalAmount.innerText);
           const newBalance = totalAmountValue - withdrawInputValue;
           totalAmount.innerText = newBalance;
        }
        else{
            showWarningMsg('warning_msg')
        }

       withdrawInput.value = '';
       extraMoney()
    })

   
// Error Message Handaling With Function 

function showWarningMsg(idName){
        let showWarn = document.getElementById(idName);
        showWarn.style.display = 'block';
}
    
function hideWarningMsg(idName){
        let hideWarn = document.getElementById(idName);
        hideWarn.style.display = 'none';
}
document.getElementById('warning_btn').addEventListener('click', function(){
       hideWarningMsg('warning_msg');
})

