const myLibrary = [];

// Book Constructor
function Book(title, author, pages, readStatus) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}



// Toggle read status function
Book.prototype.toggleReadStatus = function () {
  this.readStatus = !this.readStatus; //boolean value
};

// Add book to library function
function addBookToLibrary(title, author, pages, readStatus) {
  const newBook = new Book(title, author, pages, readStatus);
  myLibrary.push(newBook);
  displayLibrary();
}

// Display library books
function displayLibrary() {
  const libraryContainer = document.getElementById("library-container");
  libraryContainer.innerHTML = ""; // Clear current display

  myLibrary.forEach((book, index) => {
    const bookCard = document.createElement("div");
    bookCard.classList.add("book-card");

    bookCard.innerHTML = `
      <h3>${book.title}</h3>
      <p><strong>Author:</strong> ${book.author}</p>
      <p><strong>Pages:</strong> ${book.pages}</p>
      <p><strong>Read:</strong> ${book.readStatus ? "Yes" : "No"}</p>
      <button onclick="toggleReadStatus(${index})">Toggle Read Status</button>
      <button onclick="removeBook(${index})">Remove Book</button>
    `;

    libraryContainer.appendChild(bookCard);
  });
}

// Remove book function
function removeBook(index) {
  myLibrary.splice(index, 1);
  displayLibrary();
}

// Toggle read status function
function toggleReadStatus(index) {
  myLibrary[index].toggleReadStatus();
  displayLibrary();
}

// Form submission handler
const bookForm = document.getElementById("book-form");
bookForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  const readStatus = document.getElementById("read-status").checked;

  addBookToLibrary(title, author, pages, readStatus);
  bookForm.reset();
});
