const initialPrice = document.querySelector("#initial-price");
const stockQuantity = document.querySelector("#stock-quantity");
const currentPrice = document.querySelector("#current-price");
const calculateButton = document.querySelector("#calculate-button");
const output = document.querySelector("#out-paragraph");
calculateButton.addEventListener("click", function calculatepercent() {
  let finalAmount =
    currentPrice.value * stockQuantity.value -
    initialPrice.value * stockQuantity.value;
  // no loss / proft
  if (finalAmount === 0) {
    output.style.display = "block";
    output.innerText = "There's no profit or loss!";
  }
  //In case of profit
  if (finalAmount > 0) {
    output.style.display = "block";
    let profit =
      (finalAmount * 100) / (initialPrice.value * stockQuantity.value);
    console.log(profit);
    output.innerText = `Congrats you made a profit of Rs.${Math.abs(
      finalAmount
    )} and your profit % is ${Math.abs(profit)}`;
  }
  //In case of loss
  if (finalAmount < 0) {
    output.style.display = "block";
    let loss = (finalAmount * 100) / (initialPrice.value * stockQuantity.value);
    output.innerText = `Sorry you made a loss of Rs.${Math.abs(
      finalAmount
    )} and your loss % is ${Math.abs(loss)}`;
  }
});
