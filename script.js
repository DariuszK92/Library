const LIBRARY = document.querySelector('.library');
const addButton = document.querySelector('.add');
const overlay = document.querySelector('#overlay');
const login = document.querySelector('#login');
const cross = document.querySelector('#cross');

function closeOverlay() {
    overlay.style.display = 'none';
    login.style.display = 'none';
}

const myLibrary = [];

function Book(title, author, pages, read) {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    (this.title = title), (this.author = author), (this.pages = pages), (this.read = read);
}

function addNewBook() {
    function removeAllChildNodes(parent) {
        while (parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }
    removeAllChildNodes(LIBRARY);
    myLibrary.forEach((book) => {
        const newDiv = document.createElement('div');
        newDiv.classList.add('book');
        LIBRARY.appendChild(newDiv);
        const newTitle = document.createElement('h2');
        newTitle.innerText = `${book.title}`;
        newDiv.appendChild(newTitle);
        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-trash-can');
        newDiv.append(icon);
        const newAuthor = document.createElement('p');
        newAuthor.innerText = `Author: ${book.author}`;
        newDiv.appendChild(newAuthor);
        const newPages = document.createElement('p');
        newPages.innerText = `Pages: ${book.pages}`;
        newDiv.appendChild(newPages);
    });
}

const formEl = document.querySelector('.form');
const submit = document.querySelector('#submit');
submit.addEventListener('click', (event) => {
    event.preventDefault();
    const formData = new FormData(formEl);
    const data = Object.fromEntries(formData);
    myLibrary.push(data);
    addNewBook();
    closeOverlay();
    formEl.reset();
});

/// ////////////////////////////
// Overlay effect stylization //
/// ////////////////////////////

addButton.addEventListener('click', () => {
    overlay.style.display = 'block';
    login.style.display = 'block';
});

cross.addEventListener('click', closeOverlay);
overlay.addEventListener('click', closeOverlay);
