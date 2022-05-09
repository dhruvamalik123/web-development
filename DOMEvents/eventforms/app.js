// Leave the next line, the form must be assigned to a variable named 'form' in order for the exercise test to pass
const form = document.querySelector("form");
const formcontainer = document.querySelector("#list");
const productvalue = form.elements.product;
const qtyvalue = form.elements.qty;
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const li = document.createElement("li");
  li.innerText = `${qtyvalue.value} ${productvalue.value}`;
  formcontainer.appendChild(li);
  product.value = "";
  qty.value = "";
});
