

function getTextElementValueById(elementId){
    const phoneTotalElement =document.getElementById(elementId);
    const currentPhoneTotalString = phoneTotalElement.innerText;
    const currentPhoneTotal =parseInt(currentPhoneTotalString);
    return currentPhoneTotal;
}
function setTextElementValueById(elementId,value){
    const subTotalElement = document.getElementById(elementId);
subTotalElement.innerText = value;
}

function calculateSubTotal(){
const currentPhoneTotal= getTextElementValueById('phone-total');
const currentCaseTotal = getTextElementValueById('case-total');

const currentSubTotal=currentCaseTotal + currentPhoneTotal;
setTextElementValueById('sub-total',currentSubTotal);


//calculate tax
const taxAmounString = (currentSubTotal * 0.1).toFixed(2);
const taxAmount=parseFloat(taxAmounString);
setTextElementValueById('tax-amount',taxAmount);

//final amount
const finalAmount =currentSubTotal + taxAmount;
setTextElementValueById('final-total',finalAmount);

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