let myLibrary = [];

function Book(author, title, npages, read, id) {
  this.author = author;
  this.title = title;
  this.npages = npages;
  this.read = read;
  this.id = id;
  this.html = `
        <div class="book">
          <h3 class="title">${this.title}</h3>
          <span class="author">Author: ${this.author}</span>
          <span class="num_pages"> Number of pages: ${this.npages}</span>
          <span class="read">Read: ${this.read}</span>
          <button onclick = "changeBookStatus(${this.id})">Change status</button>
          <button onclick = "deleteBook(${this.id})">Delete</button>
        </div>
      `;
}

Book.prototype.updateBookId = function(book_id){
  this.id = book_id;
  this.html = `
        <div class="book">
          <h3 class="title">${this.title}</h3>
          <span class="author">Author: ${this.author}</span>
          <span class="num_pages"> Number of pages: ${this.npages}</span>
          <span class="read">Read: ${this.read}</span>
          <button onclick = "changeBookStatus(${this.id})">Change status</button>
          <button onclick = "deleteBook(${this.id})">Delete</button>
        </div>
      `;
}

Book.prototype.changeReadStatus = function(){
  if (this.read == 'YES') { 
    this.read = 'NO';
  }
  else {
    this.read = 'YES';
  }
}

function changeBookStatus(book_id){
  console.log(book_id);
  myLibrary[parseInt(book_id)].changeReadStatus();
  render(myLibrary);
}

function addBookToLibrary(book,library) {
  library.push(book);
  render(library);
}

function deleteBook(book_id){
  myLibrary.splice(book_id,1);
  render(myLibrary);
}

function updateLibraryBook(library){
  for(let i=0; i<library.length; i++){
    library[i].updateBookId(i);
  }
}

let book1 = new Book("Drew Eric Whitman", "Cashvertising", 224, "YES");
let book2 = new Book("Robert T. Kiyosaki", "Rich dad, Poor dad", 150, "YES");
let book3 = new Book("Rhona Byrne", "The Secret", 212, "YES");

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);

function render(library){
  updateLibraryBook(library);
  let library_books = document.getElementById('library_books');
  let books_html = ``;
  for (let i=0; i<library.length; i++){
    books_html += library[i].html;
  }
  library_books.innerHTML = books_html;
}

render(myLibrary);

document.getElementById('form_new_book').onsubmit = function(e){
  e.preventDefault();
  let title = document.getElementById('title').value;
  let author = document.getElementById('author').value;
  let npages = document.getElementById('num_pages').value;
  let read = (function() {
    if(document.getElementById('read_yes').checked == true )
    {
      return 'YES';
    }
    else {
      return 'NO';
    }
  })();
  let book = new Book(author,title, npages, read);

  addBookToLibrary(book,myLibrary);
};
