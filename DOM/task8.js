var form = document.getElementById('addForm');
var itemList = document.getElementById('items');

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);

function addItem(e)
{
    e.preventDefault();
    var  newItem= document.getElementById('item').value;
    var li= document.createElement('li');
    li.className= 'list-group-item';
    li.appendChild(document.createTextNode(newItem));

    //doing task9 adding descrption
    var descrip= document.getElementById('description').value;
    li.appendChild(document.createTextNode("-"+ descrip));


    var deleteBtn= document.createElement('button');
    deleteBtn.className= 'btn btn-danger btn-sm float-right delete';
    deleteBtn.appendChild(document.createTextNode('x'));
    li.appendChild(deleteBtn);
    
    itemList.append(li);

    //i added edit button on appened value below after sunmitting
    var editBtn= document.createElement('button');
    editBtn.className= 'button button1 float-right delete';
    editBtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editBtn);
}

function removeItem(e)
{
    if(e.target.classList.contains('delete'))
    {
        if(confirm('Are you sure?'))
        {
            var li= e.target.parentElement;
            itemList.removeChild(li);
        }
    }
}

//FILTER
var filter= document.getElementById('filter');

filter.addEventListener('keyup',filterItems);

// function filterItems(e)
// {
//     var text= e.target.value.toLowerCase();
//     var items= itemList.getElementsByTagName('li');
//     Array.from(items).forEach(function(item){
//         var itemName= item.firstChild.textContent;
//         if(itemName.toLocaleLowerCase().indexOf(text) != -1)
//         {
//             item.style.display= 'block';
//         }
//         else
//         {
//             item.style.display= 'none';
//         }
//     });
// }

//filtering with description
function filterItems(e)
{
    var text= e.target.value.toLowerCase();
    var items= itemList.getElementsByTagName('li');
    Array.from(items).forEach(function(item){
        var itemName= item.firstChild.textContent;
        var descriptionName= item.childNodes[1].textContent;
        if(itemName.toLowerCase().indexOf(text) != -1 || descriptionName.toLowerCase().indexOf(text) != -1)
        {
            item.style.display= 'block';
        }
        else
        {
            item.style.display= 'none';
        }
    });
}

