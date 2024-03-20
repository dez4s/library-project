class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

    info () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
};

const hp = new Book('Harry Potter and the Phoenix Order', 'J.K. Rowling', 986, 'not read yet');

console.log(hp.info());

const myBooks = [];

function addBookToLibrary() {

}

const openModalBtn = document.querySelector('#open-btn');
const modal = document.querySelector('dialog.modal');

const bookTitleInput = document.querySelector('input#title');
const bookAuthorInput = document.querySelector('input#author');
const bookPagesInput = document.querySelector('input#pages');
const bookCompleteCheckbox = document.querySelector('input#complete');

const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');

console.log(bookPagesInput, bookAuthorInput, bookCompleteCheckbox, bookPagesInput);

openModalBtn.addEventListener('click', () => {
    modal.showModal();
});

modal.addEventListener("click", e => {
    const modalDimensions = modal.getBoundingClientRect();

    if 
      (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      modal.close()
    }
});

submitBtn.addEventListener('click', (e) => {
  console.log(new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, bookCompleteCheckbox.checked));

});

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  modal.close();
});

function closeModal() {
  modal.close();
}