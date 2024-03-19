function Book(title, author,  pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    };
};

const hp = new Book('Harry Potter and the Phoenix Order', 'J.K. Rowling', 986, 'not read yet');
console.log(hp.info());

const myBooks = [];

function addBookToLibrary() {

}

const openModal = document.querySelector('#open-btn');
const modal = document.querySelector('dialog.modal');

openModal.addEventListener('click', () => {
    modal.showModal();
});

modal.addEventListener("click", e => {
    const modalDimensions = modal.getBoundingClientRect()
    if (
      e.clientX < modalDimensions.left ||
      e.clientX > modalDimensions.right ||
      e.clientY < modalDimensions.top ||
      e.clientY > modalDimensions.bottom
    ) {
      modal.close()
    }
  })