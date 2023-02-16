const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const btn = document.querySelector('.btn');
const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (e) {
  e.preventDefault();
  if (isValidInput(title.value, author.value, year.value)) {
    displayBook(title.value, author.value, year.value);
  }
});

function isValidInput(title, author, year) {
  if (title == '' && author == '' && year == '') {
    alert('Please input your information.');
    return false;
  }
  return true;
}

function displayBook(title, author, year) {
  const newRow = document.createElement('tr');

  // Creating new title
  const newTitle = document.createElement('th');
  newTitle.innerHTML = title;
  newRow.appendChild(newTitle);

  // Creating new author
  const newAuthor = document.createElement('th');
  newAuthor.innerHTML = author;
  newRow.appendChild(newAuthor);

  // Creating new Year
  const newYear = document.createElement('th');
  newYear.innerHTML = year;
  newRow.appendChild(newYear);

  // Displaying in UI
  bookList.appendChild(newRow);
}
