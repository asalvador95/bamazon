var mysql = require('mysql');
var inquirer = require('inquirer');
var Table = require('cli-table');

//Connection
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root", //Your username
    password: "roots", //Your password
    database: "bamazonDB"
});

//Functions
function displayAll() {
    //show all ids, names, and products from database.
    connection.query('SELECT * FROM products', function(error, response) {
        if (error) { console.log(error) };
        //New instance of our constructor
        var theDisplayTable = new Table({
            //declare the value categories
            head: ['Item ID', 'Product Name', 'Department', 'Price', 'Quantity'],
            //set widths to scale
            colWidths: [10, 30, 18, 10, 14]
        });
        //for each row of the loop
        for (i = 0; i < response; i++) {
            //push data to table
            theDisplayTable.push(
                [response[i].item_id, response[i].produc_name, response[i].department_name, response[i].price, response[i].stock_quantity]
            );
        }
        //log the completed table to console
        console.log(theDisplayTable.toString());
        inquireForPurchase();
    });


}; //end displayAll
function inquireForPurchase() {
    //get item ID and desired quantity from user. Pass to purchase from Database
    inquirer.prompt([

        {
            name: "ID",
            type: "input",
            message: "What is the item number of the item you wish to purchase?"
        }, {
            name: 'Quantity',
            type: 'input',
            message: "How many would you like to buy?"
        },

    ]).then(function(answers) {
        //set captured input as variables, pass variables as parameters.
        var quantityDesired = answers.Quantity;
        var IDDesired = answers.ID;
        purchaseFromDatabase(IDDesired, quantityDesired);
    });

}; //end inquireForPurchase

function purchaseFromDatabase(ID, quantityNeeded) {
    //check quantity of desired purchase. Minus quantity of the itemID from database if possible. Else inform user "Quantity desired not in stock" 
    connection.query('SELECT * FROM products WHERE item_id = ' + ID, function(error, response) {
        if (error) { console.log(error) };

        //if in stock
        if (quantityNeeded <= response[].stock_quantity) {
            //calculate cost
            var totalCost = response[].price * quantityNeeded;
            //inform user
            console.log("We have what you need! I'll have your order right out!");
            console.log("Your total cost for " + quantityNeeded + " " + response[].product_name + " is " + totalCost + ". Thank you for your Business!");
            //update database, minus purchased quantity
            connection.query('UPDATE products SET stock_quantity = stock_quantity - ' + quantityNeeded + ' WHERE item_id = ' + ID);
        } else {
            console.log("Our apologies. We don't have enough " + response[].product_name + " to fulfill your order.");
        };
        displayAll();//recursive shopping is best shopping! Shop till you drop!
    });

}; //end purchaseFromDatabase

displayAll();