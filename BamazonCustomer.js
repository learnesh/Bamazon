var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
	host: "local host",
	port: 3006,
	user: "root",
	password: "",
	database: "Bamazon"
})
function start()
connection.query('SELECT * FROM Products', function(err, res){
  if(err) throw err;
};
console.log("Welcome to Bamazon!");
connection.connect(function(err){
	if (err) throw err;
	console.log("connect as " + connection.threadId);
	start();
})
for (var i = 0; i < res.length; i++) {
        console.log(res[i].itemID + " | " + res[i].productName + " | " + res[i].departmentName + " | " + "$" + res[i].price);
    }
    console.log("-----------------------------------");

    console.log(' ');
    inquirer.prompt({
    	type:"input"
    })    name: "id",
      message: "Wt",
		message: "What is the ID of the product you want to purchase?",
      validate: function(value){
        if(isNaN(value) == false && parseInt(value) <= res.length && parseInt(value) > 0){
          return true;
        } else{
          return false;
        }
      }
          
    console.log(' ');
    inquirer.prompt({{
      type: "input",
      name: "quantity",
      message: "How many units of this product would you like to puchase??",
      validate: function(value){
        if(isNaN(value)){
          return false;
        } else{
          return true;
        }
            }
	}]).then(function(answer) {
		console.log("-----------CHECK OUT------------------------");
			checkQuantity(answer);
	})
};
       }
    var checkQuantity = 'SELECT Quantity FROM products WHERE item_id=' + userInputID;
    var params = answer.productid;
      connection.query(query, function (err, res) {
        if (err) throw err;

        for (var i = 0; i < res.length; i++) {
          if (res[i].stock_quantity < answer.ProductUnits) {

            /
            console.log("Sorry this item is currently out of stock, please check in later.");
            userInputQuantity();
          } else {

            if (answer.ProductUnits <= res[i].stock_quantity) {

              var totalPrice = res[i].customer_price * answer.ProductUnits;
              console.log("Your total is: " + totalPrice);

              connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: (res[i].stock_quantity - answer.ProductUnits)
                  },
                  {
                    item_id: (userInputID)
                  }
                ],
                function (err, res) {
                  if (err) throw err;

                  var checkQuantity = function(answer) {
                  	console.log()
                  }
         
				var total = answer.ProductUnits * res[0].price;
				var newQuantity = res[0].stockQuantity-answer.quantity;
				
				console.log("Total Cost: $" + total);

				connection.query("UPDATE `products` SET stockQuantity = (stockQuantity - ?) WHERE id = ?;", [answer.productunits, answer.productid], function(err, res){
					
						console.log("Your order had been processed at $" + total);
					});
    
