document.getElementById('deposite-botton').addEventListener('click' , function(){
    const addAmount = document.getElementById('amount-fild');
    const totalAmount = addAmount.value;
    const privousTotalAmount = parseFloat(totalAmount);
    

    const depositeAmount = document.getElementById('deposite-total');

    const totalDeposite = depositeAmount.innerText;

    const totalDepositeCreent = parseFloat(totalDeposite);

    const creentDepositeAmount = totalDepositeCreent + privousTotalAmount;

    depositeAmount.innerText = creentDepositeAmount;

    const blacneCreent = document.getElementById('total-deposite-blance');

    const blanceAmount = blacneCreent.innerText;

    const moneyInNumber = parseFloat(blanceAmount);

    const finalDiposite = moneyInNumber + creentDepositeAmount ;


   blacneCreent.innerText = finalDiposite ;

   addAmount.value = '';

    
})