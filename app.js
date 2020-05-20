let myLibrary = [];

function Book(author, title, npages, read) {
  this.author = author;
  this.title = title;
  this.npages = npages;
  this.read = read;
}

function addBookToLibrary(book,library) {
  library.push(book);
}

let book1 = new Book("Drew Eric Whitman", "Cashvertising", 224, "YES");
let book2 = new Book("Robert T. Kiyosaki", "Rich dad, Poor dad", 150, "YES");
let book3 = new Book("Rhona Byrne", "The Secret", 212, "YES");

addBookToLibrary(book1, myLibrary);
addBookToLibrary(book2, myLibrary);
addBookToLibrary(book3, myLibrary);

function render(library){
  for (let i=0; i<library.length; i++){
    library[i];
  }
}