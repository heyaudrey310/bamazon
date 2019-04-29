var mysql = require("mysql");
var inquirer = require("inquirer");

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

connection.connect(function (err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId + "\n");
    displayProduct();
});

function displayProduct() {
    console.log("Displaying a new product...\n");
    var query = connection.query( 
        "Select * FROM products",
        {
            item: 3402,
            product: "IPhone X",
            department: "Electronics",
            price: 999.00,
            quantity: 772
        },
        {
            item: 2151,
            product: "Amazon Fire Stick",
            department: "Electronics",
            price: 49.99,
            quantity: 1035
        },
        {
            item: 1765,
            product: "Echo Dot",
            department: "Electronics",
            price: 49.99,
            quantity: 2043
        },
        {
            item: 3597,
            product: "Fujifilm Instant Film",
            department: "Camera",
            price: 34.99,
            quantity: 5498
        },
        {
            item: 9873,
            product: "Playstation Gift Card",
            department: "Video Games",
            price: 25.00,
            quantity: 203
        },
        {
            item: 5982,
            product: "Becoming",
            department: "Books",
            price: 14.99,
            quantity: 542
        },
        {
            item: 9231,
            product: "XBox Wireless Controller",
            department: "Video Games",
            price: 89.95,
            quantity: 203
        },
        {
            item: 1203,
            product: "Rayban Suglasses",
            department: "Fashion",
            price: 99.99,
            quantity: 987
        },
        {
            item: 1145,
            product: "Women's Summer Dress",
            department: "Fashion",
            price: 19.99,
            quantity: 7889
        },
        {
            item: 1478,
            product: "Crocs Men's Shoes",
            department: "Fashion",
            price: 30.99,
            quantity: 241
        },
        function (err, res) {
            console.log(res.affectedRows + " product displayed!\n");
            search();
        }
    );

    // logs the actual query being run
    console.log(query.sql);
}

function search()   {
    inquirer
        .prompt({
            name: "action",
            type: "list",
            message: "What would you like to do?",
            choices: [
               "What is the ID of the product would you like to buy?",
               "How many units of the product would you like to buy?",
               validate: function(product) {
                if (isNaN(product) === false) {
                    return true;
                  }
                  return false;
               }
            ]
        })
        
}


