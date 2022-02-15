function calculation(btnId, inputId, totalId) {
  document.getElementById(btnId).addEventListener("click", function () {
    const depsitInput = document.getElementById(inputId);
    const depsitInputText = depsitInput.value;
    const deposit = parseFloat(depsitInputText);

    const totalBalance = document.getElementById("balance-total");
    const previousBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(previousBalanceText);
    let updatedBalance = previousBalance;

    // update deposit total text
    const depositTotal = document.getElementById(totalId);
    var previousDepositTotalText = depositTotal.innerText;
    var previousDepositTotal = parseFloat(previousDepositTotalText);
    if (btnId == "deposit-button" && deposit > 0) {
      updatedBalance = updatedBalance + deposit;
      totalBalance.innerText = updatedBalance;
      // total balance update
      const updatedDeositTotal = deposit + previousDepositTotal;
      depositTotal.innerText = updatedDeositTotal;
    } else if (btnId == "withdraw-button" && updatedBalance > deposit) {
      updatedBalance = updatedBalance - deposit;
      totalBalance.innerText = updatedBalance;
      // total balance update
      const updatedDeositTotal = deposit + previousDepositTotal;
      depositTotal.innerText = updatedDeositTotal;
    } else {
      // clear input
      depsitInput.value = "";
      return;
    }

    // clear input
    depsitInput.value = "";
  });
}

calculation("deposit-button", "deposit-input", "deposit-total");

calculation("withdraw-button", "withdraw-input", "withdraw-total");
