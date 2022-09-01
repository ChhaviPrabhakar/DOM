//TRAVERSING THE DOM//

var itemList= document.querySelector('#items');
// //parentNode//
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor= '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode);

// //parentElement//
// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor= '#f4f4f4';
// console.log(itemList.parentElement.parentElement.parentElement);

//childNodes
// console.log(itemList.childNodes);
// console.log(itemList.children);
// console.log(itemList.children[1]);
// itemList.children[1].style.backgroundColor= 'yellow';

// //firstChild//
// console.log(itemList.firstChild);
// //firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.textContent= 'Hello1';

// //lastChild//
// console.log(itemList.lastChild);
// //lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent= 'Hello4';

// //nextSibling//
// console.log(itemList.nextSibling);
// //nextElementSibling
// console.log(itemList.nextElementSibling);

// //previousSibling//
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.style.color= 'green';

//createElement//

// //ceate a div
// var newDiv= document.createElement('div');

// //add class
// newDiv.className='Hello';

// //add id
// newDiv.id='hello1';

// //add att
// newDiv.setAttribute('title','Hello Div');

// //create text node
// var newDivText= document.createTextNode('Hello World');

// //add text to div
// newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');

// container.insertBefore(newDiv,h1);
// newDiv.style.fontSize='20px';

// console.log(newDiv);

//doing task by following given keywords
itemList.parentNode.style.backgroundColor= '#f4f4f4';
itemList.lastElementChild.style.color= 'blue';
console.log(itemList.lastChild);
itemList.children[1].style.fontWeight='bold';
itemList.firstElementChild.style.backgroundColor='#ccc';
console.log(itemList.firstChild);
console.log(itemList.nextSibling);
console.log(itemList.nextElementSibling);
console.log(itemList.previousSibling);
itemList.previousElementSibling.style.color='orange';

var newDiv= document.createElement('div');
newDiv.setAttribute('title','Hello Div');
var newDivText= document.createTextNode('Hello');
newDiv.appendChild(newDivText);

var container= document.querySelector('header .container');
var h1= document.querySelector('header h1');

container.insertBefore(newDiv,h1);

var pNode= document.getElementById('items');
var li= document.createTextNode('Hello Buddy');
pNode.innerHTML= li + innerHTML;
console.log(pNode.innerHTML);