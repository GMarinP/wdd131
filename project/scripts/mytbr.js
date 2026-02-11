const input = document.querySelector('#wantToRead');
const button = document.querySelector('#addButton');
const list = document.querySelector('#list');

let newBooksArray = getNewBooksList() || [];

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
        deleteNewBook(item);
        input.focus();
    });
}

function setNewBooksList() {
    localStorage.setItem('myTBR', JSON.stringify(newBooksArray));
}

function getNewBooksList() {
    return JSON.parse(localStorage.getItem('myTBR'));
}

function deleteNewBook(newBook) {
    newBooksArray = newBooksArray.filter(item => item !== newBook);
    localStorage.removeItem(newBook)
    setNewBooksList();
}


newBooksArray.forEach(newBook => {
    displayList(newBook);
});


button.addEventListener('click', () => {
    if (input.value.trim() != ''){
        displayList(input.value);
        newBooksArray.push(input.value);
        setNewBooksList();
        input.value = ''; 
        input.focus();
        
    }
    else {
        alert('Please enter a book first');
        input.focus();   
    }
});

const randomButton = document.querySelector('#randomButton');
const randomBookText = document.querySelector("#randomBookText");

randomButton.addEventListener('click', () => {
    if (newBooksArray.length != 0){
        randomBook(newBooksArray);
        
    }
    else {
        alert('Please enter a book first');  
        input.focus();
    }
});

function randomBook(booksArray) {
    let number = Math.floor(Math.random() * booksArray.length)
    randomBookText.textContent = `This should be your next read: ${booksArray[number]}.`;
}
