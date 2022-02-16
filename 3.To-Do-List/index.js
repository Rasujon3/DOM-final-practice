let count = 0;
document.getElementById("add-btn").addEventListener("click", function () {
  count++;
  const inputValue = document.getElementById("input-value").value;

  const mainContainer = document.getElementById("content-container");
  const tableContainer = document.createElement("tr");
  tableContainer.innerHTML = `
    <th scope="row">${count}</th>
    <td>${inputValue}</td>
    <td>
        <button class="btn btn-primary done-btn">Done</button>
        <button class="btn btn-danger delete-btn">Delete</button>
    </td>
  `;
  mainContainer.appendChild(tableContainer);
  document.getElementById("input-value").value = "";

  // dlt & done btn work
  const deleteButton = document.getElementsByClassName("delete-btn");
  const doneButton = document.getElementsByClassName("done-btn");

  for (const button of deleteButton) {
    button.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.display = "none";
    });
  }
  for (const button of doneButton) {
    button.addEventListener("click", function (e) {
      e.target.parentNode.parentNode.style.textDecoration = "line-through";
    });
  }
});
