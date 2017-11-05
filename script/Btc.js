    

//Fetch and display Bitcoin price in Naira

fetch('https://api.coinbase.com/v2/prices/BTC-NGN/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

//Display the Bitcoin price
  
document.getElementById('BTC-NGN').textContent ='$'+price;


});





//Fetch and display Bitcoin price in USD

fetch('https://api.coinbase.com/v2/prices/BTC-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

var nf = new Intl.NumberFormat();

//Display the Bitcoin price
  
document.getElementById('BTC-USD').textContent = '$' + nf.format(price)
;


});




//Fetch and display Bitcoin price in pounds

fetch('https://api.coinbase.com/v2/prices/BTC-GBP/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

//Display the Bitcoin price
  
document.getElementById('BTC-GBP').textContent ='$' + price;


});




