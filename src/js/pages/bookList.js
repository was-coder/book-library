class BookList {
  static getBookList() {
    const tableSection = document.createElement('section');
    tableSection.className = 'container home';

    // Creating the table header
    const tableHeader = document.createElement('h2');
    tableHeader.className = 'text-center pb-5 table-header';
    tableHeader.textContent = 'List of Awesome Books';

    // Creating the table element
    const tableElement = document.createElement('table');
    tableElement.className = 'table table-striped table-hover';

    // Adding some style to the table element
    tableElement.style.borderCollapse = 'collapse';
    tableElement.style.width = '100%';
    tableElement.style.paddingLeft = '20px';
    tableElement.style.paddingRight = '20px';

    // Creating the table header row
    const tableHeaderRow = document.createElement('tr');
    tableHeaderRow.className = 'table-header';
    tableHeaderRow.innerHTML = `
      <th class="th-sm">Title</th>
      <th class="th-sm">Author</th>
      <th class="th-sm"></th>
      <th class="th-sm"></th>
    `;

    // Adding some style to the table header cells
    const tableHeaderCells = tableHeaderRow.querySelectorAll('th');
    tableHeaderCells.forEach((cell) => {
      cell.style.textAlign = 'left';
      cell.style.paddingTop = '12px';
      cell.style.paddingBottom = '12px';
      cell.style.backgroundColor = '#1a183a';
      cell.style.color = '#e8e8f0';
    });

    // Creating the table body
    const tableBody = document.createElement('tbody');
    tableBody.className = 'content-div';

    tableElement.appendChild(tableHeaderRow);
    tableElement.appendChild(tableBody);
    tableSection.appendChild(tableHeader);
    tableSection.appendChild(tableElement);

    return tableSection;
  }
}

export default BookList;
