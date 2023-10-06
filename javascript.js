const myLibrary = [new Book('Moby Dick', 'Herman Melville', 7, true), new Book('The Hobbit', 'J.R.R. Tolkien', 295, false)];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
  let title = document.getElementById('title');
  let author = document.getElementById('author');
  let pages = document.getElementById('pages');
  let read = document.getElementById('read');

  let newBook = new Book(title.value, author.value, parseInt(pages.value), read.checked);
  myLibrary.push(newBook);
  displayBook(newBook);
}

function displayBook(book) {
    let container = document.getElementById('container');
    let card = document.createElement('div');
    card.className = "card";
    card.innerHTML = `<ul><li class='bookTitle'>${book.title}</li><li>${book.author}</li><li>${book.pages}</li><li class='readStatus'>${book.read}</li></ul>`;
    card.innerHTML += `<button class='remove'>Remove Book</button><button class='markRead'>Mark as Read</button>`;
    container.appendChild(card);
    addCardListener(card);
}

myLibrary.forEach((element) => {
  console.log(element);
  displayBook(element);
});


const dialog = document.querySelector('dialog');
const openButton = document.getElementById('open');
const closeButton = document.getElementById('close');

openButton.addEventListener("click", () => {
  dialog.showModal();
})

closeButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBookToLibrary();
  dialog.close();
  console.log(myLibrary);
})


function addCardListener(card){
    let removeButton = card.querySelector('.remove');
    let readButton = card.querySelector('.markRead');

    removeButton.addEventListener("click", (event) => {
      let card = event.target.parentElement;
      let title = card.querySelector('.bookTitle');
      //myLibrary = myLibrary.filter(function(el) { return el.title != title.value} );
      myLibrary.splice(myLibrary.findIndex(el => el.title === title.innerText), 1);
      card.remove();
    })

    readButton.addEventListener("click", (event) => {
      let card = event.target.parentElement;
      let title = card.querySelector('.bookTitle');
      let read = card.querySelector('.readStatus');
      let i = myLibrary.findIndex(el => el.title === title.innerText);
      myLibrary[i].read = !myLibrary[i].read;
      read.innerText = myLibrary[i].read;
    })


}