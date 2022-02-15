document
  .getElementById("detail-submit-btn")
  .addEventListener("click", function () {
    const detailsInput = document.getElementById("buyer-details-input");
    const detailsText = detailsInput.value;
    document.getElementById("buyer-info").innerText = detailsText;
    detailsInput.value = "";
  });

document
  .getElementById("add-details-btn")
  .addEventListener("click", function () {
    const infoTale = document.getElementById("info-table");
    const itemName = document.getElementById("item-name-input");
    const itemPrice = document.getElementById("item-price-input");
    const itemQuantity = document.getElementById("item-quantity-input");

    if (
      itemName.value == "" ||
      itemPrice.value < 0 ||
      itemQuantity.value < 0 ||
      itemPrice.value == "" ||
      itemQuantity.value == ""
    ) {
      console.log("sorry");
      alert("Please enter valid input");
      // clear input
      itemName.value = "";
      itemPrice.value = "";
      itemQuantity.value = "";
      return;
    }

    const totalPrice =
      parseFloat(itemPrice.value) * parseInt(itemQuantity.value);

    const tr = document.createElement("tr");
    const td = document.createElement("td");
    const th1 = document.createElement("th");
    const th2 = document.createElement("th");
    const th3 = document.createElement("th");

    th3.classList.add("item-total");

    td.innerText = itemName.value;
    th1.innerText = itemPrice.value;
    th2.innerText = itemQuantity.value;
    th3.innerText = totalPrice;

    tr.appendChild(td);
    tr.appendChild(th1);
    tr.appendChild(th2);
    tr.appendChild(th3);

    infoTale.appendChild(tr);

    // clear input
    itemName.value = "";
    itemPrice.value = "";
    itemQuantity.value = "";
    calculationTotal();
  });

function calculationTotal() {
  const subTotal = calculateSubTotal();
  const subtotalToDisplay = document.getElementById("sub-total");
  subtotalToDisplay.innerText = subTotal;
  // tax calcultaion
  const tax = subTotal * 0.2;
  document.getElementById("tax").innerText = tax;
  // grand total calculation
  const grandTotal = subTotal + tax;
  document.getElementById("grand-total").innerText = grandTotal;
  document.getElementById("grand-total-2").innerText = grandTotal;
}

function calculateSubTotal() {
  let subTotal = 0;
  const cost = document.getElementsByClassName("item-total");
  // console.log("all prices", cost);
  for (const element of cost) {
    const price = parseFloat(element.innerText);
    subTotal = subTotal + price;
  }
  return subTotal;
}
