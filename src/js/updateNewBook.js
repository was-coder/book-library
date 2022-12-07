const updateNewBook = (updateBook) => {
  const bookUpdate = (updateBook) => {
    const { id, title, author } = updateBook;
    const row = document.createElement('tr');
    const titleColumn = document.createElement('td');
    const authorColumn = document.createElement('td');
    const removeColumn = document.createElement('td');
    const removeBtn = document.createElement('button');

    row.className = 'book';
    removeBtn.id = id;
    titleColumn.innerText = title;
    authorColumn.innerText = author;
    removeBtn.innerText = 'Remove';
    removeBtn.className = 'remove-btn';
    removeColumn.append(removeBtn);
    row.append(titleColumn, authorColumn, removeColumn);
    return row;
  };

  const contentDiv = document.querySelector('.content-div');
  const fragment = document.createDocumentFragment();
  updateBook.forEach((element) => {
    fragment.prepend(bookUpdate(element));
  });
  contentDiv.appendChild(fragment);
};

export default updateNewBook;
