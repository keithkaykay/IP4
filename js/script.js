function getSize() {
  var size = document.getElementById("size").value;
  return parseInt(size);
}

function getCrust() {
  var crust = document.getElementById("crust").value;
  return parseInt(crust);
}

function getTopping() {
  var topping = document.getElementById("topping").value;
  return parseInt(topping);
}

function getQuantity() {
  var number = document.getElementById("number").value;
  return parseInt(number);
}

function totalAmount() {
  var totals = (getSize() + getCrust() + getTopping() ) * getQuantity();
  alert(
    "You have Ordered " +
    getQuantity("") +
    " pizza," + 
    "" +
    " amounting to ksh. " +
    totals +
    "" +
    " Thanks for your order welcome again."
  );
}