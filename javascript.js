const myLibrary = [new Book('Moby Dick', 'Herman Melville', 7, true), new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  // do stuff here
}

function displayBook(book) {
    container = document.getElementById('container');
    card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `<ul><li>${book.title}</li><li>${book.author}</li><li>${book.pages}</li><li>${book.read}</li></ul>`;
    container.appendChild(card);
}

myLibrary.forEach((element) => {
  console.log(element);
  displayBook(element);
});
