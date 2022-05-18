const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const noOfNotes = document.querySelectorAll(".no-of-notes");

const availableNotes = [2000, 500, 100, 20, 10, 5, 1];

checkButton.addEventListener('click',()=>
{
    hideMessage();
    if(Number(billAmount.value)>0)
    {
      if(Number(cashGiven.value)>=Number(billAmount.value))
      {
         const dueAmount = Number(cashGiven.value)-Number(billAmount.value);
         calculateChange(dueAmount);
      }
      else{
          showMessage("You Still have some due amount");
      }
    }
    else
    {
      showMessage("That is not a valid amount");
    }

});


function calculateChange(amount)
{
    for(let i=0;i<availableNotes.length;i++)
    {
        const numberOfNotes = Math.trunc(amount/availableNotes[i]);
        amount = amount  %  availableNotes[i]; 
        noOfNotes[i].innerText = numberOfNotes;
    }
}


function hideMessage()
{
    message.style.display="none";
}
function showMessage(msg)
{
    message.style.display="block";
    message.innerText = msg;
}