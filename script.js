function Book(title, author, pages, read) {
  (this.title = title),
    (this.author = author),
    (this.pages = pages),
    (this.read = read);
}

Book.prototype.info = function () {
  console.log(
    `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
  );
};

const hobbit = new Book("The Hobbit", "J.R.R.Tolkien", "324", "read");

hobbit.info();
