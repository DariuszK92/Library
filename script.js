const LIBRARY = document.querySelector('.library');

const myLibrary = [
    {
        title: 'The Hobbit',
        author: 'J.R.R.Tolkien',
        pages: '324',
        read: 'rear'
    },
    {
        title: 'Andre',
        author: 'J.R.R.Tolkien',
        pages: '324',
        read: 'rear'
    },
    {
        title: 'Andre',
        author: 'J.R.R.Tolkien',
        pages: '324',
        read: 'rear'
    },
    {
        title: 'Andre',
        author: 'J.R.R.Tolkien',
        pages: '324',
        read: 'rear'
    },
    {
        title: 'Andre',
        author: 'J.R.R.Tolkien',
        pages: '324',
        read: 'rear'
    },
    {
        title: 'Andre',
        author: 'J.R.R.Tolkien',
        pages: '324',
        read: 'rear'
    }
];

function Book(title, author, pages, read) {
    // eslint-disable-next-line no-unused-expressions, no-sequences
    (this.title = title), (this.author = author), (this.pages = pages), (this.read = read);
}

Book.prototype.info = function () {
    console.log(`${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`);
};

const hobbit = new Book('The Hobbit', 'J.R.R.Tolkien', '324', 'read');

function addBookToLibrary() {
    // do stuff here
}

myLibrary.forEach((book) => {
    const newDiv = document.createElement('div');
    newDiv.classList.add('book');
    LIBRARY.appendChild(newDiv);
});
