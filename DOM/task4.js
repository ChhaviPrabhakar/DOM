//GET ELEMENT BY CLASS NAME//

var items= document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent= 'Changed';
// items[1].style.fontWeight= 'bold';
// items[1].style.color= 'red';
// items[1].style.backgroundColor= 'yellow';

// for(var i=0; i<items.length; i++)
// {
//     items[i].style.backgroundColor= 'pink';
// }

items[2].style.backgroundColor= 'green';

for(var i=0;i<items.length;i++)
{
    items[i].style.fontWeight= 'bold';
}