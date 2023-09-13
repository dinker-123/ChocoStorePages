document.addEventListener("DOMContentLoaded", function () {
  const chocolateForm = document.getElementById("chocolateForm");
  const selectedChocolates = document.getElementById("selectedChocolates");
  const totalPrice = document.getElementById("totalPrice");

  let total = 0;

  // Event listener for checkbox changes
  chocolateForm.addEventListener("change", function (event) {
      const checkboxes = document.querySelectorAll('input[name="chocolate"]:checked');
      const selectedChocolatesArray = Array.from(checkboxes).map((checkbox) => checkbox.value);

      total = selectedChocolatesArray.reduce((acc, chocolate) => {
          if (chocolate === "Dark Chocolate") {
              return acc + 2.0;
          } else if (chocolate === "Milk Chocolate") {
              return acc + 1.5;
          }
          // Add more chocolates and prices here
          return acc;
      }, 0);

      selectedChocolates.textContent = selectedChocolatesArray.join(", ");
      totalPrice.textContent = total.toFixed(2);
  });
});
