const myLibrary = [];

function Book(author, title, npages, read, id) {
  this.author = author;
  this.title = title;
  this.npages = npages;
  this.read = read;
  this.id = id;
  this.html = `
        <div class='book'>
          <h3 class='title'>${this.title}</h3>
          <span class='author'>Author: ${this.author}</span>
          <span class='num_pages'> Number of pages: ${this.npages}</span>
          <span class='read'>Read: ${this.read}</span>
          <button onclick = 'changeBookStatus(${this.id})'>Change status</button>
          <button onclick = 'deleteBook(${this.id})'>Delete</button>
        </div>
      `;
}

Book.prototype.updateBookId = function (bookId) {
  this.id = bookId;
  this.html = `
        <div class='book'>
          <h3 class='title'>${this.title}</h3>
          <span class='author'>Author: ${this.author}</span>
          <span class='num_pages'> Number of pages: ${this.npages}</span>
          <span class='read'>Read: ${this.read}</span>
          <button onclick = 'changeBookStatus(${this.id})'>Change status</button>
          <button onclick = 'deleteBook(${this.id})'>Delete</button>
        </div>
      `;
};

Book.prototype.changeReadStatus = function () {
  if (this.read === 'YES') {
    this.read = 'NO';
  } else {
    this.read = 'YES';
  }
};

function updateLibraryBook(library) {
  for (let i = 0; i < library.length; i += 1) {
    library[i].updateBookId(i);
  }
}

function render(library) {
  updateLibraryBook(library);
  const libraryBooks = document.getElementById('library_books');
  let booksHtml = '';
  for (let i = 0; i < library.length; i += 1) {
    booksHtml += library[i].html;
  }
  libraryBooks.innerHTML = booksHtml;
}

function changeBookStatus(bookId) {
  myLibrary[bookId].changeReadStatus();
  render(myLibrary);
}

function addBookToLibrary(book, library) {
  library.push(book);
  render(library);
}

function deleteBook(bookId) {
  myLibrary.splice(bookId, 1);
  render(myLibrary);
}

const book1 = new Book('Drew Eric Whitman', 'Cashvertising', 224, 'YES');
const book2 = new Book('Robert T. Kiyosaki', 'Rich dad, Poor dad', 150, 'YES');
const book3 = new Book('Rhona Byrne', 'The Secret', 212, 'YES');

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);

render(myLibrary);

document.getElementById('form_new_book').onsubmit = function (e) {
  e.preventDefault();

  const author = document.getElementById('author').value;
  const title = document.getElementById('title').value;
  const npages = document.getElementById('num_pages').value;
  const read = function () {
    if (document.getElementById('read_yes').checked === true) {
      return 'YES';
    }
    return 'NO';
  };
  const book = new Book(author, title, npages, read());

  addBookToLibrary(book, myLibrary);
};
