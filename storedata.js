const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);
function onSubmit(e)
{
    e.preventDefault();

    //console.log(nameInput.value);
    if(nameInput.value=='' || emailInput.value=='')
    {
        //alert('Please enter fields');
        msg.classList.add('error');
        msg.innerHTML = 'Please fill all fields';

        setTimeout(() => msg.remove(),3000);
    }
    else
    {
        //var text= (`${nameInput.value} : ${emailInput.value}`);
        let inputData= {
            Name: nameInput.value,
            Email: emailInput.value
        }

        let inputData_serialized= JSON.stringify(inputData);
        localStorage.setItem('userDetails',inputData_serialized);

        //let inputData_deserialized= JSON.parse(localStorage.getItem('inputData'));

        //clear field
        nameInput.value='';
        emailInput.value='';
    }
}