const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#usersList');

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

        axios.post('https://crudcrud.com/api/83511d44e6f449caa2bab2b9d987b49a/appointmentData', inputData)
            .then(res => {
                addUserOnScreen(res.data)
                console.log(res)
            })
            .catch(err => {
                document.body.innerHTML += "<h4> Something went wrong! </h4>"
                console.log(err)
            });


        // let inputData_serialized= JSON.stringify(inputData);
        // localStorage.setItem(inputData.Email,inputData_serialized);
        // addUserOnScreen(inputData);

        // //clear field
        // nameInput.value='';
        // emailInput.value='';
    }
}

document.addEventListener('DOMContentLoaded', () => {

    axios.get('https://crudcrud.com/api/83511d44e6f449caa2bab2b9d987b49a/appointmentData')
        .then(res => {
            console.log(res)

            for (var i = 0; i < res.data.length; i++) {
                addUserOnScreen(res.data[i]);
            }
        })
        .catch(err => console.log(err));

    // var arr = Object.keys(localStorage);
    // for (var i = 0; i < arr.length; i++) {
    //     var userdetails = JSON.parse(localStorage.getItem(arr[i]));
    //     addUserOnScreen(userdetails);
    // }
})

function addUserOnScreen(user)
{
    if(localStorage.getItem(user.Email) !== null)
    {
        removeUserFromScreen(user.Email);
    }
    // let parentNode= document.getElementById('userList');
    // let childHTML= `<li id=${user.Email}> ${user.Name} : ${user.Email} 
    // <button onclick= deleteUser('${user.Email}')> Delete </button>
    // <button onclick= editUser('${user.Name}','${user.Email}')> Edit </button>
    // </li>`;
    // parentNode.innerHTML += childHTML;

    let parentNode= document.getElementById('userList');
    let childHTML= `<li id=${user._id}> ${user.Name} : ${user.Email} 
    <button onclick= deleteUser('${user._id}')> Delete </button>
    <button onclick= editUser('${user.Name}','${user._id}')> Edit </button>
    </li>`;
    parentNode.innerHTML += childHTML;
}

// function deleteUser(emailId)
// {
//     localStorage.removeItem(emailID);
//     removeUserFromScreen(emailID);
// }

function deleteUser(userId)
{
    axios
    .delete(`https://crudcrud.com/api/83511d44e6f449caa2bab2b9d987b49a/appointmentData/${userId}`)
    .then(res => {
        removeUserFromScreen(userId);
    })
    .catch(err => console.log(err));
}

function removeUserFromScreen(userId)
{
    let parentNode= document.getElementById('userList');
    childNodeToBedeleted= document.getElementById(userId);
    if(childNodeToBedeleted)
    {
        parentNode.removeChild(childNodeToBedeleted);
    }
}

function editUser(emailID,name)
{
    document.getElementById('name')= name;
    document.getElementById('email')= emailID;
    deleteUser(emailID);
}