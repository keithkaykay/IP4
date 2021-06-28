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
  document.getElementById("totals").innerHTML = totals; 
} 

function getLocation() {
  var location = document.getElementById("location").value;
  return (location);
}

function getName() {
  var name = document.getElementById("name").value;
  return (name);
}

function deliver() {
  var location2 = getLocation();
  var name2 = getName();

  alert(
    "Thankyou " + name2 + ". " + "We will deliver to " + location2 + "."
  );
}

function purchase() {
  var totaltotal = totals + 150; 
  document.getElementById("totaltotal").innerHTML = totaltotal;
}