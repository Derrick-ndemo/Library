const myLibrary = [
    new Book('The Hobbit', 'J.R.R. Tolkien', 295, true),
    new Book('1984', 'George Orwell', 328, false),
    new Book('Adventures of Bruuh', 'Bruuh', 323, true)
];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    displayBooks();
}

function displayBooks() {
    const bookList = document.getElementById('book-list');
    bookList.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        
        bookCard.innerHTML = `
            <h3>${book.title}</h3>
            <p>Author: ${book.author}</p>
            <p>Pages: ${book.pages}</p>
            <p>Read:</p> 
            <div class="toggle">
            <input type="checkbox" id="read-${index}" class="toggle-checkbox" ${book.read ? 'checked' : ''}>
            <label for="read-${index}" class="toggle-label"></label>
        </div>
            
            <br>
            <button id="remove-btn" onclick="removeBook(${index})">Remove</button>
            
        `;
    
        bookList.appendChild(bookCard);
    });
}

function removeBook(index) {
    myLibrary.splice(index, 1);
    displayBooks();
}

function toggleReadStatus(index) {
    myLibrary[index].read = !myLibrary[index].read;
    displayBooks();
}

document.getElementById('new-book-btn').addEventListener('click', () => {
    const formDiv = document.getElementById('book-form');
    formDiv.classList.toggle('hidden');
});

document.getElementById('add-book-form').addEventListener('submit', (e) => {
    e.preventDefault();

const title = document.getElementById('title').value;
const author = document.getElementById('author').value;
const pages = document.getElementById('pages').value;
const read = document.getElementById('read').checked;

const newBook = new Book(title, author, pages, read);
addBookToLibrary(newBook);

document.getElementById('add-book-form').reset();
});

// Initial display of books
displayBooks();