let tipCalculate=()=>{
    let billAmount=document.getElementById('billAmount').value;
     billAmount=Number(billAmount);

    let tipPer=document.getElementById('tipper').value;
    tipPer=Number(tipPer);
    
   let tipsAmt=(billAmount*tipPer)/100;

   document.getElementById('tipAmount').innerHTML="Tips Amount is :"+tipsAmt;


   let output=tipsAmt+billAmount;

   document.getElementById('output').innerHTML="Total AMount:"+output;
}