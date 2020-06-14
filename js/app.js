// // Chapter # 1
// // Task 01

// alert("Error! Please enter a valid password.");
// alert("Welcome to JS Land...\nHappy Coding!");
// alert("Welcome to JS Land...");
// alert("Happy Coding!");
// alert("Hello... I can run JS through my web browser's console.");
// // I tried the last alert through web browser console.



// // Chapter # 2
// // Task 01
// var userName = " ";

// // Task 02
// var myName = "Murtuza Banani";

// // Task 03
// var message = "Hello World";
// alert(message);

// // Task 04
// var name = prompt("Enter your full name");
// var age = prompt("Enter your age");
// var qualification = prompt("Enter your qualification");

// alert(name);
// alert(age);
// alert(qualification);


// // Task 05
// var pizza = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(pizza);


// // Task 06
// var email = "example@example.com";
// alert("My email address is" + " " + email);

// // Task 07
// var book = "A smarter way to learn JavaScript";
// alert(book);

// //Task 08
// document.write("Yes! I can write HTML content through JavaScript");


// //Task 09
// alert("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");
// document.write("▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬");


// // Chapter 03
// // Task 01
// var age = "31";
// alert("I am" + " " + age + " " + "years old");

// // Task 02
// var visits = "14";
// alert("You have visited this site" + " " + visits + " " + "times");


// // Task 03
// var birthYear = 1989;
// document.write("My birth year is" + " " + birthYear + "<br>" + "Data type of my declared variable is number");


// // Task 04
// var visitorName = prompt("What's your name?" , "Your Name");
// var productTitle = prompt("What you want to order?" , "T-Shirt");
// var quantity = prompt("How many" + " " + productTitle + "(s)" + " " + "you want to order?", "10");

// document.write(visitorName.bold() + " " + "ordered" + " " + quantity.bold() + " " + productTitle.bold() + "(s)" + " " + "on XYZ Clothing Store");


// // Chapter 04
// // Task 01

// var a = "01"; var b = "02"; var c = "03";
// console.log(a + " " + b + " " + c);


// // Task 02
// var illegalVar1 = "1name";
// var illegalVar2 = "var";
// var illegalVar3 = "else";
// var illegalVar4 = "illegal.var4";
// var illegalVar5 = "if"

// document.write("Illegal Variables".bold() + "<br>")
// document.write(illegalVar1 + "<br>" + illegalVar2 + "<br>" + illegalVar3 + "<br>" + illegalVar4 + "<br>" + illegalVar5);


// var legalVar1 = "userName";
// var legalVar2 = "username";
// var legalVar3 = "USERNAME";
// var legalVar4 = "$username";
// var legalVar5 = "UserName"
// document.write("<br>" + "<br>")
// document.write("Legal Variables".bold() + "<br>")
// document.write(legalVar1 + "<br>" + legalVar2 + "<br>" + legalVar3 + "<br>" + legalVar4 + "<br>" + legalVar5);


// // Task 03
// var varNames = ["numbers" , "$" , "_" , "sensitive" , "keywords"]


// document.write("<h2>Rules for naming JS variables</h2>" + "<br>");
// document.write("Variable names can only contain " + varNames[0] + "," + " " + varNames[1] + " and " + varNames[2] + ". " + "For example" + " " + varNames[1] + "my_1stVariable" + "<br>")
// document.write("Variable must begins with a " + " " + "," + " " + " or " + " " + ". " + "For example" + " " + varNames[1] + "name" + " " + varNames[2] + "name or name" + "<br>")
// document.write("Variable names are case " + varNames[3] + "<br>")
// document.write("Variable names should not be JS " + varNames[4] + "<br>")


// // Chapter 05
// // Task 01 and 2
// var a = 3;
// var b = 8;
// var c = a + b;
// var d = a - b;
// var e = a * b;
// var f = a / b;
// var g = a % b;

// document.write("Sum of" + " " + a + " and " + b + " is " + c + "<br>");
// document.write("Subsctraction of" + " " + a + " and " + b + " is " + d + "<br>");
// document.write("Multiplication of" + " " + a + " and " + b + " is " + e + "<br>");
// document.write("Division of" + " " + a + " and " + b + " is " + f + "<br>");
// document.write("Modulus of" + " " + a + " and " + b + " is " + g);

// // Task 03
// var a = "";
// document.write("Value after variable declaration is" + " " + a + "<br>");

// var a = 5;
// document.write("Initial Value:" + " " + a + "<br>");

// var a = ++a
// document.write("Value after increment is" + " " + a + "<br>");

// var a = a + 7
// document.write("Value afer addition is" + " " + a + "<br>");

// var a = --a
// document.write("Value after decrement is" + " " + a + "<br>");


// var a = a % 3
// document.write("The remainder is" + " " + a);

// // Task 04
// var ticketPrice = 600;
// var ticketQuantity = 5;
// var ticketTotal = ticketPrice * ticketQuantity;

// document.write("Total cost to buy " + ticketQuantity + " tickets to a movie is " + ticketTotal + " PKR");

// // Task 05
// var a = 4;
// var b = 10;
// var c = 1;

// for(c ; c <= b; c++){
//     document.write(a + "x" + c + "=" + a*c + "<br>");   
// }

// // Task 06
// var c = 25;
// var f = 70;

// var a = (f - 32) * 5 / 9;
// var b = (c * 9 / 5) + 32;

// document.write(c + "°C" + " is " + b + "°F" + "<br>");
// document.write(f + "°   F" + " is " + a + "°C");

// // Task 07
// var item1 = 650;
// var item2 = 100;
// var item1Qty = 3;
// var item2Qty = 7;
// var shippingCharges = 100;
// var total = (item1 * item1Qty) + (item2 * item2Qty) + (shippingCharges)

// document.write("<h1>Shopping Cart</h1>" + "<br>")
// document.write("Price of item 1 is" + " " + item1 + "<br>");
// document.write("Quantity of item 1 is" + " " + item1Qty + "<br>");
// document.write("Price of item 2 is" + " " + item2 + "<br>");
// document.write("Quantity of item 2 is" + " " + item2Qty + "<br>");
// document.write("Shipping Charges" + " " + shippingCharges + "<br>" + "<br>");

// document.write("Total cost of your order is" + " " + total);



// // Task 08

// var totalMarks = 980;
// var obtainedMarks = 804;
// var studentPercentage = obtainedMarks * 100 / totalMarks + "%";

// document.write("Total Marks:" + " " + totalMarks + "<br>")
// document.write("Total Marks:" + " " + obtainedMarks + "<br>")
// document.write("Total Marks:" + " " + studentPercentage + "<br>")


// // Task 09

// var usDollar = 10;
// var saudiRiyals = 25;
// var pkrUSD = 104.80;
// var pkrSriyals = 28;
// var totalCurrency = (usDollar * pkrUSD) + (saudiRiyals * pkrSriyals);

// document.write("<h1>Currency in PKR</h1>");
// document.write("Total currency in PKR: " + totalCurrency)

// // Task 10

// var a = 6;
// var b = ((a + 5) * 10) / 2;

// document.write(b);


// // Task 11

// var currentYear = 2020;
// var birthYear = 1989;
// var userAge = currentYear - birthYear;

// document.write("<h1>Age Calculator</h1>");
// document.write("Current Year: " + currentYear + "<br>");
// document.write("Birth Year: " + birthYear + "<br>");
// document.write("Your Age is: " + userAge + "<br>");



// // Task 12

// var radius = 20;
// var a = 3.142;

// document.write("<h1>The Geometrizer</h1>");
// document.write("Radius of a circle: " + radius + "<br>");
// document.write("The circumference is: " + radius * a * 2 + "<br>");
// document.write("The area is: " + radius * a * 2 * 10 + "<br>");


// // Task 13
// var favSnack = "Chocolate Chips";
// var currentAge = 31;
// var maxAge = 90;
// var estAmount = 2;
// var totalSupply = (maxAge - currentAge) * 365 * estAmount;

// document.write("<h1>The Lifetime Supply Calculator</h1>");
// document.write("Favourite Snack: " + favSnack + "<br>");
// document.write("Current Age: " + currentAge + "<br>");
// document.write("Estimated Maximum Age: " + maxAge + "<br>");
// document.write("Amount of Snack Pack Per Day: " + estAmount + "<br>");
// document.write("You will need " + totalSupply + " " + favSnack + " to last you until the ripe old age " + maxAge);


// // Chapter 6 - 9 
// // Task 01
// var a = 10;

// document.write("Result" + "<br>");
// document.write("The value of a is:" + a + "<br>");
// document.write(".................................." + "<br>" + "<br>");

// var b = ++a;

// document.write("The value of ++a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>");

// var b = a++ ;

// document.write("The value of a++ is: " + b + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>");

// var b = --a;

// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>");

// var b = a--;

// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>");

// // Task 02

// var a = 2;
// var b = 1;

// document.write("Result" + "<br>");
// document.write("The value of a is: " + a + "<br>");
// document.write("The value of b is: " + b + "<br>");

// var c = --a - --b + ++b + b--;

// document.write("The result of --a - --b + ++b + b-- is: " + c + "<br>");
// document.write(".................................." + "<br>" + "<br>");


// var a = 2;
// var b = 1;
// var c = --a;

// document.write("The value of --a is: " + a + "<br>");
// document.write("Now the value of a is: " + a + "<br>" + "<br>");

// var a = 2;
// var b = 1;
// var c = --a - --b ;

// document.write("The value of --a - --b is: " + c + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("Now the value of a is: " + b + "<br>" + "<br>");

// var a = 2;
// var b = 1;
// var c = --a - --b + ++b;

// document.write("The value of --a - --b + ++b is: " + c + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("Now the value of a is: " + b + "<br>" + "<br>");

// var a = 2;
// var b = 1;
// var c = --a - --b + ++b + b--;

// document.write("The value of --a - --b + ++b + b-- is: " + c + "<br>");
// document.write("Now the value of a is: " + a + "<br>");
// document.write("Now the value of a is: " + b + "<br>" + "<br>");


// // Task 03
// var a = prompt("Enter Your Name");
// document.write("Hello " + a);

// // Task 04

// var tableNumber = prompt("Enter Table Number" , "5");
// var tableLength = prompt("Enter Table Length" , "10");

// if (tableNumber < 1) {
//     tableNumber = 5;    
// }

// for(a = 1 ; a <= tableLength; a++){
//     document.write(tableNumber + " x " + a + " = " + tableNumber * a + "<br>")
// }

// // Task 05
// var subject01 = prompt("Enter your subject name" , "Subject 01");
// var subject02 = prompt("Enter your subject name" , "Subject 02");
// var subject03 = prompt("Enter your subject name" , "Subject 03");
// var marks01 = +prompt("Enter your marks for " + subject01 , "100");
// var marks02 = +prompt("Enter your marks for " + subject02 , "100");
// var marks03 = +prompt("Enter your marks for " + subject03 , "100");
// var obtainedMarks = marks01 + marks02 + marks03;
// var totalMarks = 100;

// document.write(subject01 + " " + totalMarks + " " + marks01 + " " + (marks01 * 100 / totalMarks) + "%" + "<br>");
// document.write(subject02 + " " + totalMarks + " " + marks02 + " " + (marks02 * 100 / totalMarks) + "%" + "<br>");
// document.write(subject03 + " " + totalMarks + " " + marks03 + " " + (marks03 * 100 / totalMarks) + "%" + "<br>");

// document.write("TOTAL" + (totalMarks * 3) + " " + obtainedMarks + " " +  ((obtainedMarks * 100) / 300) + "%" + "<br>");



// // Chapter 9 - 11
// // Task 01

// var city = prompt("Enter Your City");

// if (city == "Karachi" || city == "karachi") {
//     document.write("Welcome to city of lights")
// } else if (city == "Islamabad" || city == "islamabad"){
//     document.write("Welcome to the capital of Pakistan")
// } else {
//     document.write("Welcome" + " " + city);
// }


// // Task 02
// var gender = prompt("Enter Your Gender" , "Male or Female");

// if (gender == "Male" || gender == "male") {
//     document.write("Good Morning Sir")
// } else if (gender == "Female" || gender == "female"){
//     document.write("Good Morning Ma'am")
// } else {
//     document.write("Good Morning!");
// }


// // Task 03
// var signalColor = prompt("Enter Signal Color" , "Red or Yellow or Green");

// if (signalColor == "Red" || signalColor == "red") {
//     document.write("Must Stop");
// } else if (signalColor == "Yellow" || signalColor == "yellow"){
//     document.write("Ready to move");
// } else if (signalColor == "Green" || signalColor == "green"){
//     document.write("Move now")
// } else {
//     document.write("Please refresh and enter the correct color.");
// }


// // Task 04
// var carFuel = +prompt("Enter remaining fuel" , "0.25");

// if(carFuel <= 0.25){
//     document.write("Please refill the fuel in your car");
// } else if (carFuel > 0.25) {
//     document.write("You have enough fuel. Don't worry.");
// } else {
//     document.write("Are you sure you enter a numeric value. Please refresh and enter the value again.")
// }


// // Task 05

// var a = 4; if (++a === 5){ alert("given condition for variable a is true"); }

// var b = 82; if (b++ === 83){ alert("given condition for variable b is true"); }
// var c = 12; if (c++ === 13){ alert("condition 1 is true"); } if (c === 13){ alert("condition 2 is true"); } if (++c < 14){ alert("condition 3 is true"); } if(c === 14){ alert("condition 4 is true"); }
// var materialCost = 20000; var laborCost = 2000; var totalCost = materialCost + laborCost; if (totalCost === laborCost + materialCost){ alert("The cost equals"); }
// if (true){ alert("True"); } if (false){ alert("False"); }

// if("car" < "cat"){ alert("car is smaller than cat"); }

// // Task 06

// var marksObtained = +prompt("Enter marks you obtained in all subjects" , "80");
// var marksTotal = +prompt("Enter total marks of all subjects" , "300");
// var percentage = marksObtained * 100 / marksTotal;

// document.write("Total Marks : " + marksTotal + "<br>");
// document.write("Total Obtained : " + marksObtained + "<br>");
// document.write("Percentage : " + percentage + "%" + "<br>");

// if (percentage > 100) {
//     document.write("Grade: Invalid" + "<br>" + "Remarks: Invalid" + "<br>");
// } else if(percentage >= 80) {
//     document.write("Grade: A-one" + "<br>" + "Remarks: Excelent" + "<br>");
// } else if(percentage >= 70) {
//     document.write("Grade: A" + "<br>" + "Remarks: Good" + "<br>");
// } else if(percentage >= 60) {
//     document.write("Grade: B" + "<br>" + "Remarks: You need to improve" + "<br>");
// } else if(percentage < 60) {
//     document.write("Grade: Fail" + "<br>" + "Remarks: Sorry" + "<br>");
// } else {
//     document.write("Grade: Invalid" + "<br>" + "Remarks: Invalid" + "<br>");
// }

// // Task 07
// var a = 6;
// var b = prompt("Guess the secret Number");

// if(b == a) {
//     document.write("Bingo! Correct Answer.");
// } else if (b == a+1 || b == a-1) {
//     document.write("Close enough to the correct answer.");
// } else {
//     document.write("Sorry! Wrong answer. Try again.");    
// }


// // Task 08

// var a = prompt("Enter a number to check if its divisible by 3 or not.");
// var b = a / 3;
// var c = (b - Math.floor(b)) !== 0;;

// if(c){
//     document.write("Your answer is : " + b + "<br>" + "The number you entered is not divisible by 3");
// } else {
//     document.write("Your answer is : " + b + "<br>" + "The number you entered is divisible by 3");
// }


// // Task 09
// var a = +prompt("Enter temperature");

// if(a >= 40) {
//     document.write("T > " + a + "<br>" + "It is too hot outside.");
// } else if(a >= 30) {
//     document.write("T > " + a + "<br>" + "The Weather today is Normal.");
// } else if(a >= 20) {
//     document.write("T > " + a + "<br>" + "Today’s Weather is cool.");
// } else if(a >= 10 || a < 10) {
//     document.write("T > " + a + "<br>" + "OMG! Today’s weather is so Cool.");
// }


// // Task 10
// var a = +prompt("Enter Value 1");
// var b = +prompt("Enter Value 2");
// var c = prompt("Enter operator");

// if(c == "+"){
//     document.write(a+b);
// } else if(c == "-"){
//     document.write(a-b);
// } else if(c == "*"){
//     document.write(a*b);
// } else if(c == "/"){
//     document.write(a/b);
// } else if(c == "%"){
//     document.write(a%b);
// } else {
//     document.write("refresh and enter correct values")
// }

