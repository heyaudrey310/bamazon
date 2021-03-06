var mysql = require("mysql");
var inquirer = require("inquirer");
var Table = require("cli-table2");

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

// went to 'npm cli-table2' so a table of the products can be visible in terminal
var display = function() {
    connection.query("SELECT * FROM products", function(err, res) {
      if (err) throw err;
      var table = new Table({
        head: ["Product ID", "Product Description", "Price"],
        colWidths: [12, 50, 8],
        colAligns: ["center", "left", "right"],
        
      });
  
      for (var i = 0; i < res.length; i++) {
        //   console.log(res[i]);
        //   console.log(res[i].products_name)
        table.push([res[i].item_id, res[i].product_name, res[i].price]);
      }
 // console.log(table)
      console.log(table.toString());
     // console.log("");
    productItems();
    }); //End Connection to products
}
display();

function productItems() {
	connection.connect(function(err) {

		connection.query("SELECT * FROM products", function(err, res) {
		if (err) throw err;
		
		productId();
		});
	});
}



function productId() {

	inquirer.prompt([

		{
		 type: "input",
		 name: "id",
		 message: "What is the ID of the product you would like to buy?.",
		 validate: function(value) {
		 	if (!isNaN(value) && value < 20000) {
		 		return true;
		 	}
		 	return false;
		 }
		},

		{
		 type: "input",
		 name: "quantity",
		 message: "How many units of the product would you like to buy? \n",
		 validate: function(value) {
		 	if (!isNaN(value)) {
		 		return true;
		 	}
		 	return false;
			}
		}

		]).then(function(answer) {

			var userId = answer.id;
			console.log("Chosen item id: " , userId);

			var userQuantity = answer.quantity;
			console.log("Chosen quantity from stock: " , userQuantity , "\n");

			connection.query("SELECT * FROM products WHERE ?", [{ item_id : answer.id }], function(err, res) {
				if (err) throw err;
				
				
				console.table(res);
				var currQuantity = res[0].stock_quantity;
				console.log("Current quantity in stock: " , currQuantity);
				var price = res[0].price;
				var remQuantity = currQuantity - userQuantity;
				console.log("Remaining quantity in stock: " , remQuantity);

				if(currQuantity > answer.quantity) {

					console.log("Qty Remaining: " + remQuantity);
					console.log("Total Cost: " + (answer.quantity * price) + "\n");

					connection.query("UPDATE products SET stock_quantity=? WHERE item_id=?",
                    [
                    remQuantity, answer.id
                    ],

					
						function(err, res){
							console.table(res);
						});

					connection.query("SELECT * FROM products", function(err, res) {

						console.log("This is the updated inventory of product items: ");
						console.log("------------------------------- \n");
						console.table(res);
					});

				} else {
					console.log("Insufficient amounts, please edit your units!");
				}

			connection.end();

			});
		})

}