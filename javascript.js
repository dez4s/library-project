class Book {
    constructor(title, author, pages, read) {
      this.title = title;
      this.author = author;
      this.pages = pages;
      this.read = read;
    }

    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`;
    };
};

// const hp = new Book('Harry Potter and the Phoenix Order', 'J.K. Rowling', 986, 'not read yet');

// console.log(hp.info());

const myBooks = [];

const openModalBtn = document.querySelector('#open-btn');
const modal = document.querySelector('dialog.modal');

const bookTitleInput = document.querySelector('input#title');
const bookAuthorInput = document.querySelector('input#author');
const bookPagesInput = document.querySelector('input#pages');
const bookCompleteCheckbox = document.querySelector('input#complete');
const bookCardsContainer = document.querySelector('#book-cards-container');

const closeBtn = document.querySelector('#close-btn');
const submitBtn = document.querySelector('#submit-btn');

const bookExistsError = document.querySelector('div#book-exists-error')


function addBookToLibrary(e) {
  if (bookTitleInput.validity.valid && bookAuthorInput.validity.valid && bookPagesInput.validity.valid) {
    const bookInstance = new Book(bookTitleInput.value, bookAuthorInput.value, bookPagesInput.value, bookCompleteCheckbox.checked);

    if( !(myBooks.some(item => item.title === bookInstance.title)) ) {
        myBooks.push(bookInstance);
        bookExistsError.style.display = 'none';
      } else {
        e.preventDefault();
        console.log(bookExistsError);
        bookExistsError.style.display = 'block';
      }
  }
}


function createCardsFromLibrary(books) {
  const cards = document.querySelectorAll('.card');

  books.forEach((book) => {
    const isCardCreated = Array.from(cards).some((card) => card.dataset.book === book.title);

    if (!isCardCreated) {
      const card = document.createElement('div');
      card.setAttribute('data-book', book.title)
      card.classList.add('card');
      bookCardsContainer.appendChild(card);

      const bookInfoSection = document.createElement('div');

      bookInfoSection.id = 'book-info-section';
      card.appendChild(bookInfoSection)

      const title = document.createElement('p');
      title.textContent = `Title: "${book.title}"`;
      bookInfoSection.appendChild(title)

      const author = document.createElement('p');
      author.textContent = 'Author: ' + book.author;
      bookInfoSection.appendChild(author)

      const pages = document.createElement('p');
      pages.textContent = 'Pages: ' + book.pages;
      bookInfoSection.appendChild(pages)

      const bookButtonSection = document.createElement('div');
      bookButtonSection.id = 'book-button-section'
      card.appendChild(bookButtonSection)

      const readBtn = document.createElement('button');
      readBtn.id = "read-btn";
      readBtn.classList.add('btn');
      if(book.read === true) readBtn.classList.add('read');
      readBtn.textContent = 'Read';
      bookButtonSection.appendChild(readBtn)

      const removeBtn = document.createElement('button')
      removeBtn.classList.add('btn');
      removeBtn.textContent = 'X';
      bookButtonSection.appendChild(removeBtn);  
      }
  });
}

function closeModal() {
  modal.close();
}

window.addEventListener('click', (e) => {
  if(e.target.id === 'remove-btn') {
    
    
    console.log('yoooo');
  }
});

submitBtn.addEventListener('click', function (e) {
  addBookToLibrary(e);
  createCardsFromLibrary(myBooks);
});

closeBtn.addEventListener('click', (e) => {
  bookExistsError.style.display = 'none';
  modal.close();
});

openModalBtn.addEventListener('click', () => modal.showModal());

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
