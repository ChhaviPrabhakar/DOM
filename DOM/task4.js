//GET ELEMENT BY CLASS NAME//

// var items= document.getElementsByClassName('list-group-item');
// // console.log(items);
// // console.log(items[1]);
// // items[1].textContent= 'Changed';
// // items[1].style.fontWeight= 'bold';
// // items[1].style.color= 'red';
// // items[1].style.backgroundColor= 'yellow';

// // for(var i=0; i<items.length; i++)
// // {
// //     items[i].style.backgroundColor= 'pink';
// // }

// items[2].style.backgroundColor= 'green';

// for(var i=0;i<items.length;i++)
// {
//     items[i].style.fontWeight= 'bold';
// }


//GET ITEM BY TAG NAME//

// var li= document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent= 'Changed';
// li[1].style.fontWeight= 'bold';
// li[1].style.color= 'red';
// li[1].style.backgroundColor= 'yellow';
// li[2].style.backgroundColor= 'green';

// for(var i=0;i<li.length;i++)
// {
//     li[i].style.fontWeight= 'bold';
// }

//  QUERY SELECTOR//

// var header= document.querySelector('#main-header');
// header.style.borderBottom= 'solid 5px blue';

// var input= document.querySelector('input');
// input.value= 'Hello World';

// var submit= document.querySelector('input[type="submit"]');
// submit.value= 'Send';

// var item=document.querySelector('.list-group-item');
// item.style.color='red';

// var lastItem= document.querySelector('.list-group-item:last-child');
// lastItem.style.color='blue';

// var secondItem= document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color= 'navy'; 

//QUERY SELECTOR ALL//

// var titles= document.querySelectorAll('.title');
// console.log(titles);
// titles[0].textContent= 'Hello World';

// var odd= document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i=0;i<odd.length;i++)
// {
//     odd[i].style.backgroundColor= '#f4f4f4';
//     even[i].style.backgroundColor= '#ccc';
// }

//task from query selector
var items= document.querySelector('li:nth-child(2)');
items.style.backgroundColor= 'green';

var items= document.querySelector('li:nth-child(3)');
items.style='visibility: hidden';

//task from query selector all
var secondItem= document.querySelectorAll('li:nth-child(2)');
for(var i=0;i<secondItem.length;i++)
{
    secondItem[i].style.color= 'blue'; // set blue bcz background is already green
}

var odd=document.querySelectorAll('li:nth-child(odd)');
for(var i=0;i<odd.length;i++)
{
    odd[i].style.backgroundColor= 'pink'; // comment out the prev task for working
}

//querySelector is use for access only single element
//while querySelectorAll is use access all element in single method