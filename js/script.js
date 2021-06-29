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

function getSize2() {
  var size2 = document.getElementById("size2").value;
  return parseInt(size2);
}

function getCrust2() {
  var crust2 = document.getElementById("crust2").value;
  return parseInt(crust2);
}

function getTopping222() {
  var topping2 = document.getElementById("topping222").value;
  return parseInt(topping2);
}

function getTopping22() {
  var topping22 = document.getElementById("topping22").value;
  return parseInt(topping22);
}

function getTopping32() {
  var topping32 = document.getElementById("topping32").value;
  return parseInt(topping32);
}

function quantity() {
  var quantity = document.getElementById("quantity").value;
  return parseInt(quantity);
}

function pizza2() {
  var totals2 = ( getSize2()+ getCrust2() + getTopping222() + getTopping22() + getTopping32() ) * quantity(); 
  document.getElementById("pizza2").innerHTML = totals2; 
} 

var deliveryFee = 150

function purchase(){
  var totals = (getSize() + getCrust() + getTopping() + getTopping2() + getTopping3() ) * getQuantity();
  var totals2 = (getSize2() + getCrust2() + getTopping222() + getTopping22() + getTopping32() ) * quantity();
  var totaltotal = totals + deliveryFee + totals2;
  var confirmation = confirm ("Do you want us to deliver to you?");
    if (confirmation == true) {
      txt = totaltotal;
    } else {
      txt = totals + totals2;
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
  $("#order2").click(function(){
    $("#fivesix").show();
  });
})

$(document).ready(function(){
  $("#add2").click(function(){
    $("#topping22").show();
  });
})

$(document).ready(function(){
  $("#add32").click(function(){
    $("#topping32").show();
  });
})

$(document).ready(function(){
  $("#add22").click(function(){
    $("#topping22").show();
  });
})