function calc(btnId, costId, price) {
  document.getElementById(btnId).addEventListener("click", function () {
    const memoryCost = document.getElementById(costId);
    memoryCost.innerText = price;
    // total price calc
    const bestPrice = document.getElementById("best-price").innerText;
    const memoryPrice = document.getElementById("memory-cost").innerText;
    const storagePrice = document.getElementById("storage-cost").innerText;
    const deliveryPrice = document.getElementById("delivery-cost").innerText;

    const totalPrice =
      parseFloat(bestPrice) +
      parseFloat(memoryPrice) +
      parseFloat(storagePrice) +
      parseFloat(deliveryPrice);

    document.getElementById("total-price").innerText = totalPrice;
  });
}

calc("sixteenGB", "memory-cost", 300);
calc("eightGB", "memory-cost", 0);
calc("ssd1", "storage-cost", 0);
calc("ssd2", "storage-cost", 100);
calc("ssd3", "storage-cost", 200);
calc("free-delivery", "delivery-cost", 0);
calc("paid-delivery", "delivery-cost", 20);

// coupon code calc
const fake = "sujon";
document.getElementById("apply-btn").addEventListener("click", function () {
  const promoInput = document.getElementById("promo-input");
  const promo = promoInput.value;
  if (fake == promo) {
    let totalPriceId = document.getElementById("total-price");
    const totalPriceText = totalPriceId.innerText;
    const totalPrices = parseFloat(totalPriceText);
    console.log(totalPrices);
    const discount = ((totalPrices * 20) / 100).toFixed(2);
    const newTotal = totalPrices - discount;
    totalPriceId.innerText = newTotal;

    // clean input
    totalPriceId.value = "";
  }
});
