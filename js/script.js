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

var deliveryFee = 150

function purchase(){
  /* 
  var size = document.getElementById("size").value;
  var crust = document.getElementById("crust").value;
  var topping = document.getElementById("topping").value;
  var number = document.getElementById("number").value;
  */
  var totals = (getSize() + getCrust() + getTopping() ) * getQuantity();
  var totaltotal = totals + deliveryFee;
  var name2 = getName();
  /*
  alert(
    "Thankyou " + name2 + ". " + "Your order is ," + size + ", " + crust + ", " + topping + ", and you have bought " + number + " of them." +  
  );
  */
  document.getElementById("totaltotal").innerHTML = totaltotal; 
}