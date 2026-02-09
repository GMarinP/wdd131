const input = document.querySelector('#bookRead');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

let booksArray = getBooksList() || [];

function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    li.textContent = item;
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    li.append(deleteButton);
    list.append(li);

    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
        deleteBook(item);
        input.focus();
    });
}

function setBooksList() {
    localStorage.setItem('myBooks', JSON.stringify(booksArray));
}

function getBooksList() {
    return JSON.parse(localStorage.getItem('myBooks'));
}

function deleteBook(book) {
    booksArray = booksArray.filter(item => item !== book);
    localStorage.removeItem(book)
    setBooksList();
}


booksArray.forEach(book => {
    displayList(book);
});


button.addEventListener('click', () => {
    if (input.value.trim() != ''){
        displayList(input.value);
        booksArray.push(input.value);
        setBooksList();
        input.value = ''; 
        input.focus();
        
    }
    else {
        alert('Please enter a book first');
        input.focus();   
    }
});