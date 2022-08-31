// EXAMINE THE DOCUMENT OBJECT//
//console.dir(document);
// console.log(document.domain);
// console.log(document.url);
// console.log(document.title);
// //document.title=123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// //document.all[10].textContent='Hello';
// console.log(document.forms);
// console.log(document.forms[0]);
// console.log(document.links);
//console.log(document.images);

//GET ELEMENT BY ID//

//console.log(document.getElementById('header-title'));
var headerTitle= document.getElementById('header-title');
// // console.log(headerTitle);
// // headerTitle.textContent= 'Hello';
// // headerTitle.innerText= 'Goodbye';
// // headerTitle.innerHTML= '<h3>Hello</h3>';

// var header=document.getElementById('main-header');
// // headerTitle.style.borderBottom= 'solid 3px #000';
// header.style.borderBottom= 'solid 3px #000';

headerTitle.style.borderBottom= 'solid 4px black';

var addItem= document.getElementsByClassName('title');
addItem[0].innerHTML= '<b style="color:green;">Add Items</b>';