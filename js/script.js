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

function getTopping2() {
  var topping2 = document.getElementById("topping2").value;
  return parseInt(topping2);
}

function getTopping3() {
  var topping3 = document.getElementById("topping3").value;
  return parseInt(topping3);
}

function getQuantity() {
  var number = document.getElementById("number").value;
  return parseInt(number);
}

function totalAmount() {
  var totals = (getSize() + getCrust() + getTopping() + getTopping2()  + getTopping3() ) * getQuantity();
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
  var totals = (getSize() + getCrust() + getTopping() + getTopping2() + getTopping3() ) * getQuantity();
  var totaltotal = totals + deliveryFee;
  var confirmation = confirm ("Do you want us to deliver to you?");
    if (confirmation == true) {
      txt = totaltotal;
    } else {
      txt = totals;
    }
    document.getElementById("totalstotals").innerHTML = txt;
}

$(document).ready(function(){
  $("#add").click(function(){
    $("#topping2").show();
  });
})
$(document).ready(function(){
  $("#add2").click(function(){
    $("#topping3").show();
  });
})

$(document).ready(function(){
  $("#add2").click(function(){
    $("#topping3").show();
  });
})