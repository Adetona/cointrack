

//Fetch and display Litecoin price in Naira


fetch('https://api.coinbase.com/v2/prices/LTE-NGN/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;



var nf = new Intl.NumberFormat();


//Display the Bitcoin price
  
document.getElementById('LTE-NGN').textContent =price;


});


//Fetch and display Litecoin price in USD

fetch('https://api.coinbase.com/v2/prices/LTC-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;



var nf = new Intl.NumberFormat();

//Display the Bitcoin price
  
document.getElementById('LTC-USD').textContent ='$' + nf.format(price);


});



//Fetch and display Litecoin price in Pounds

fetch('https://api.coinbase.com/v2/prices/LTE-GBP/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

//Display the Bitcoin price
  
document.getElementById('LTE-GBP').textContent =price;


});