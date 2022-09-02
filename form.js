const form= document.getElementById('form');
const namee= document.getElementById('name');
const email= document.getElementById('mail');
const num= document.getElementById('mob');
const date= document.getElementById('doc');
const time= document.getElementById('toc');

form.addEventListener('submit',getDetails);

function getDetails(e)
{
    e.preventDefault();
    var texts= (`${namee.value} : ${email.value} : ${num.value} : ${date.value} , ${time.value}`);
    localStorage.setItem('userDetails',texts);

    //clearing fields after submitting
    namee.value='';
    email.value='';
    num.value='';
    date.value='';
    time.value='';
}