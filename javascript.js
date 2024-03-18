function Book(title, author,  pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    };
};

const hp = new Book('Harry Potter and the Goblet of Fire', 'J.K. Rowling', 636, 'not read yet');

console.log(hp.info());

