const defaultTitle = "";
const defaultAuthor = "";
const defaultPage = 0;

//setting constants (trashcan heehee)
let currentTitle = defaultTitle;
let currentAuthor = defaultAuthor; 
let currentPage = defaultPage;

function setCurrentTitle(newTitle){
  currentTitle = newTitle;
}

function setCurrentAuthor(newAuthor){
  currentAuthor = newAuthor;
}

function setCurrentPage(newPage){
  currentPage = newPage;
}

let submitGrabber = document.getElementById("form");

submitGrabber.addEventListener('submit', function(event){
  event.preventDefault()//Prevents Autosubmit

  let titleGrabber = document.querySelector("#title").value;
  setCurrentTitle(titleGrabber);
  console.log("Current Title: " + currentTitle);

  let authorGrabber = document.querySelector("#author").value;
  setCurrentAuthor(authorGrabber);
  console.log("Current Author: " + currentAuthor);

  let pageGrabber = document.querySelector("#page").value;
  setCurrentPage(pageGrabber);

  addBookToLibrary();
  resetValues();
})

//selected from HTML
const bookLibrary = document.querySelector("#bookLibrary")
const addBook = document.querySelector('#addBook');

const myLibrary = [];

//the constructor 
class Book{
  constructor (title, author, page, read){
    this.title = title;
    this.author = author;
    this.page = page;
    this.read = read;
  }
}

Book.prototype.createBookCard = function(){
  let motherDiv = document.createElement('div');
  motherDiv.id = "childNode " + myLibrary.length.toString();
  // motherDiv.classList.add(motherDiv);
  let divTitle = document.createElement('div');
  divTitle.textContent = `Title: ${myLibrary[myLibrary.length - 1].title}`;
  motherDiv.appendChild(divTitle);

  let divAuthor = document.createElement('div');
  divAuthor.textContent =  `Author: ${myLibrary[myLibrary.length - 1].author}`;
  motherDiv.appendChild(divAuthor);

  let divPage = document.createElement('div');
  divPage.textContent = `Page Number: ${myLibrary[myLibrary.length - 1].page}`;
  motherDiv.appendChild(divPage);

  // connect delete button to book card
  motherDiv.appendChild(deletePost());

  bookLibrary.appendChild(motherDiv);


  }

function deletePost(){
  let deleteButton = document.createElement('button');
  deleteButton.innerText = "Delete Book";
  deleteButton.id = "childNode " + myLibrary.length.toString();
  deleteButton.onclick = function(){
    this.parentNode.parentNode.removeChild(this.parentNode);    
  }
  return deleteButton;

  // Assuming you wanna keep the item and delete button under one element
  //
  // bookLibrary.appendChild(deleteButton);
}






function addBookToLibrary(){
  const book = new Book(currentTitle,currentAuthor,currentPage,'Test Read')
  myLibrary.push(book);
  book.createBookCard();
  console.log(myLibrary);
}

function resetValues(){
  titleGrabber = document.querySelector("#title").value = "";
  authorGrabber = document.querySelector("#author").value = "";
  pageGrabber = document.querySelector("#page").value ="";
}





