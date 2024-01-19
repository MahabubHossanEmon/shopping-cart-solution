
function updatePhoneNumber(isIncreased){
    const phoneNumberField = document.getElementById('phone-number-field');
    
    const phoneNumberString = phoneNumberField.value;
  
    const previousPhoneNumber = parseInt(phoneNumberString);
    let newPhoneNumber ;
    if(isIncreased === true){
        newPhoneNumber=previousPhoneNumber + 1;
        }
        else{
            newPhoneNumber =previousPhoneNumber - 1;
        }
    
    phoneNumberField.value=newPhoneNumber;

    return newPhoneNumber;
}


function updateTotalPhonePrice(newPhoneNumber){
    const phoneTotalElement = document.getElementById('phone-total');
    const phoneTotalPrice = newPhoneNumber * 1219;
    phoneTotalElement.innerText=phoneTotalPrice;
}

// function getTextElementValueById(elementId){
//     const phoneTotalElement =document.getElementById(elementId);
//     const currentPhoneTotalString = phoneTotalElement.innerText;
//     const currentPhoneTotal =parseInt(currentPhoneTotalString);
//     return currentPhoneTotal;
// }


// function calculateSubTotal(){
// const currentPhoneTotal= getTextElementValueById('phone-total');
// const currentCaseTotal = getTextElementValueById('case-total');

// const currentSubTotal=currentCaseTotal + currentPhoneTotal;
// const subTotalElement = document.getElementById('sub-total');
// subTotalElement.innerText = currentSubTotal;
// }

document.getElementById('phone-number-plus').addEventListener('click',function(){
   
  const newPhoneNumber =  updatePhoneNumber(true);
//   const phoneTotalElement = document.getElementById('phone-total');
//   const phoneTotalPrice = newPhoneNumber * 1219;
//   phoneTotalElement.innerText=phoneTotalPrice;
updateTotalPhonePrice(newPhoneNumber);

//calculate total
////////----------------------------------
///----------------///
// const phoneTotalElement =document.getElementById('phone-total');
// const currentPhoneTotalString = phoneTotalElement.innerText;
// const currentPhoneTotal =parseInt(currentPhoneTotalString);

calculateSubTotal();



})

document.getElementById('phone-number-minus').addEventListener('click',function(){
  const newPhoneNumber =  updatePhoneNumber(false);
  updateTotalPhonePrice(newPhoneNumber);

  calculateSubTotal(); 
})