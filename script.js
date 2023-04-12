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

window.onload = function () {
    const storedBooks = JSON.parse(localStorage.getItem('books'));
    if (storedBooks.length > 0) {
        for (let i = 0; i < storedBooks.length; i++) {
            myLibrary.push(storedBooks[i]);
        }
    }
    addNewBook();
};

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
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
        newDiv.dataset.indexNumber = myLibrary.indexOf(book);
        if (book.read === 'off') {
            newDiv.classList.add('off');
            LIBRARY.appendChild(newDiv);
        } else {
            LIBRARY.appendChild(newDiv);
        }

        const newTitle = document.createElement('h2');
        newTitle.innerText = `${book.title}`;
        newDiv.appendChild(newTitle);
        const newAuthor = document.createElement('p');
        newAuthor.innerText = `Author: ${book.author}`;
        newDiv.appendChild(newAuthor);
        const newPages = document.createElement('p');
        newPages.innerText = `Pages: ${book.pages}`;
        newDiv.appendChild(newPages);
        const icon = document.createElement('i');
        icon.classList.add('fa-solid');
        icon.classList.add('fa-trash-can');
        icon.tabIndex = 0;
        const index = myLibrary.indexOf(book);
        icon.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            localStorage.setItem('books', JSON.stringify(myLibrary));

            addNewBook();
        });
        newDiv.append(icon);
        const toggleLabel = document.createElement('label');
        toggleLabel.classList.add('switch');
        newDiv.append(toggleLabel);
        const toggle = document.createElement('input');
        toggle.type = 'checkbox';
        if (book.read === 'on') {
            toggle.checked = true;
            toggleLabel.append(toggle);
        } else {
            toggle.checked = false;
            toggleLabel.append(toggle);
        }
        toggle.addEventListener('click', () => {
            if (book.read === 'on') {
                newDiv.classList.add('off');
                book.read = 'off';
                localStorage.setItem('books', JSON.stringify(myLibrary));
            } else {
                newDiv.classList.remove('off');
                book.read = 'on';
                localStorage.setItem('books', JSON.stringify(myLibrary));
            }
        });
        const toggleSpan = document.createElement('span');
        toggleSpan.classList.add('slider');
        toggleSpan.classList.add('round');
        toggleLabel.append(toggleSpan);
    });
}

const formEl = document.querySelector('.form');
const submit = document.querySelector('#submit');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');

title.addEventListener('input', () => {
    title.setCustomValidity('');
    if (!title.checkValidity()) {
        title.setCustomValidity('Title must contain at least three characters');
    } else {
        title.setCustomValidity('');
    }
});

author.addEventListener('input', () => {
    author.setCustomValidity('');
    if (!author.checkValidity()) {
        author.setCustomValidity('Author name must contain at least three characters');
    } else {
        author.setCustomValidity('');
    }
});

pages.addEventListener('input', () => {
    pages.setCustomValidity('');
    if (!pages.checkValidity()) {
        pages.setCustomValidity('Page number must be between 1 and 2000');
    } else {
        pages.setCustomValidity('');
    }
});

submit.addEventListener('click', (event) => {
    const formData = new FormData(formEl);
    if (formEl.checkValidity()) {
        event.preventDefault();
        const ObjIdToFind = formData.get('title');
        const isObjectPresent = myLibrary.find((o) => o.title === ObjIdToFind);
        if (isObjectPresent) {
            // As find return object else undefined
            alert('Book with this title already exists!');
            addNewBook();
            closeOverlay();
            formEl.reset();
        } else {
            const tit = formData.get('title');
            const aut = formData.get('author');
            const pag = formData.get('pages');
            if (formData.get('read') === null) {
                const data = new Book(tit, aut, pag, 'off');
                myLibrary.push(data);
            } else {
                const data = new Book(tit, aut, pag, 'on');
                myLibrary.push(data);
            }
            localStorage.setItem('books', JSON.stringify(myLibrary));
            addNewBook();
            closeOverlay();
            formEl.reset();
        }
    } else {
    }
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
