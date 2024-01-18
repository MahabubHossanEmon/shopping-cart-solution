function updateCaseNumber(isIncrease){
    const numberField=document.getElementById('case-number-field');
    const numberString =numberField.value;
    const previousNumber=parseInt(numberString);
    
    

    let newNumber;
    if(isIncrease === true){
        newNumber = previousNumber + 1;
    }
    else{
        newNumber=previousNumber -1;
    }
 
    numberField.value=newNumber;
    return newNumber;
}
function updateCaseTotalPrice(newCaseNumber){
    const caseTotalPrice =newCaseNumber * 59;
    const caseTotalElement = document.getElementById('case-total');
    caseTotalElement.innerText =caseTotalPrice;
}
// function getNumberPlus(elementId){
//     const caseNumberField=document.getElementById(elementId);
//     const caseNumberString=caseNumberField.value;
//     const previousCaseNumber=parseInt(caseNumberString);
//     const newCaseNumber=previousCaseNumber + 1;
//     caseNumberField.value=newCaseNumber;

    
// }

// function getNumberMinus(elementId){
//     const caseNumberField=document.getElementById(elementId);
//     const caseNumberString=caseNumberField.value;
//     const previousCaseNumber=parseInt(caseNumberString);
//     const newCaseNumber=previousCaseNumber -  1;
//     caseNumberField.value=newCaseNumber;

    
// }