//case section

document.getElementById('btn-case-plus').addEventListener('click',function(){
    //  const caseNumberField=document.getElementById('case-number-field');
    //  const caseNumberString=caseNumberField.value;
    //  const previousCaseNumber = parseInt(caseNumberString);
    //  const newCaseNumber = previousCaseNumber + 1;
    //  caseNumberField.value = newCaseNumber ;
    // getNumberPlus('case-number-field');
    const newCaseNumber=updateCaseNumber(true);
    // const caseTotalPrice =newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText =caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
})

document.getElementById('case-number-minus').addEventListener('click',function(){
    // const caseNumberField=document.getElementById('case-number-field');
    // const caseNumberString=caseNumberField.value;
    // const previousCaseNumber=parseInt(caseNumberString);
    // const newCaseNumber=previousCaseNumber - 1;
    // caseNumberField.value=newCaseNumber;

    // getNumberMinus('case-number-field');
    const newCaseNumber=updateCaseNumber(false);
    // const caseTotalPrice=newCaseNumber * 59;
    // const caseTotalElement = document.getElementById('case-total');
    // caseTotalElement.innerText=caseTotalPrice;
    updateCaseTotalPrice(newCaseNumber);
})



//phone Scetion

document.getElementById('phone-number-plus').addEventListener('click',function(){
    getNumberPlus('phone-number-field');
})

document.getElementById('phone-number-minus').addEventListener('click',function(){
    getNumberMinus('phone-number-field');
})


