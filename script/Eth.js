
//Fetch and display Ethereum price in Naira

fetch('https://api.coinbase.com/v2/prices/ETH-NGN/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

var naira = 3000;

//number.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

//Display the Bitcoin price
  
//document.getElementById('ETH-NGN').textContent = dollar.toLocaleString() + price;

//var price2 = price.toLocaleString('de-DE', { style: 'currency', currency: 'EUR' });

document.getElementById('ETH-NGN').textContent = naira.toLocaleString();

//alert(naira.toLocaleString()); 



});


//Fetch and display Ethereum price in USD

fetch('https://api.coinbase.com/v2/prices/ETH-USD/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;


var nf = new Intl.NumberFormat();


//Display the Bitcoin price
  
document.getElementById('ETH-USD').textContent ='$' + nf.format(price);


});



//Fetch and display Ethereum price in Pounds

fetch('https://api.coinbase.com/v2/prices/ETH-GBP/spot').then(function(response) { 
  // Convert to JSON
  return response.json();
}).then(function(data) {
  
var price = data.data.amount;

//Display the Bitcoin price
  
document.getElementById('ETH-GBP').textContent =price;


});