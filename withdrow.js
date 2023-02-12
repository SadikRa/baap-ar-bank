document.getElementById('withdraw-button').addEventListener('click', function(){

    const withdrawTotalAmount = document.getElementById('deposite-fild');

    const taotalAmount = withdrawTotalAmount.value;

    const taotalAmountNumbers = parseFloat(taotalAmount);






    const withdrawBlance = document.getElementById('withdr-amaount');

    const withdrawTotalblance = withdrawBlance.innerText;

    const withdrawTotalblanceNumbers = parseFloat(withdrawTotalblance);


    const withdrawTotals = withdrawTotalblanceNumbers + taotalAmountNumbers ;

    withdrawBlance.innerText = withdrawTotals;


    const withdrawBlanceTotal = document.getElementById('total-deposite-blance');

    const withdrawBlanceNumbers = withdrawBlance.innerText;

    const withdrawNumbers = parseFloat(withdrawBlanceNumbers);





    const totalWithdrow = withdrawNumbers - withdrawTotals;

    withdrawBlanceTotal.innerText = totalWithdrow;


    withdrawTotalAmount.value = '';


})