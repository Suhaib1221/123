// // ==================// Assignment # 4====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLE NAMES: LEGAL & ILLEGAL!===========================
// // ===============// start===========================



// // 1. Declare 3 variables in one statement
// var x = 1, y = 2, z = "hello";
// alert(x)
// alert(y)
// alert(z)

// // 2. Declare 5 legal & 5 illegal variable 

// // Legal variable names
// var myVar;
// var $myVar;
// var _myVar;
// var myVar1;
// var my_Var;

// // Illegal variable names
// // var 1myVar; // Starts with a number
// // var my-Var; // Contains a hyphen
// // var my Var; // Contains a space
// // var myVar&; // Contains an invalid character
// // var myVar!; // Contains an invalid character

// // 3. Display the rules in the browser
// document.write("<h1>Rules for naming JS variables</h1>");
// document.write("<p>Variable names can only contain letters, numbers, underscores, and dollar signs. For example $my_1stVariable</p>");
// document.write("<p>Variables must begin with a letter, underscore, or dollar sign. For example $name, _name, or name</p>");
// document.write("<p>Variable names are case sensitive</p>");
// document.write("<p>Variable names should not be JS keywords</p>");

// // ==================// Assignment # 4====================
// // =================// JAVASCRIPT===========================
// // ================// VARIABLE NAMES: LEGAL & ILLEGAL!===========================
// // ================// End===========================



// // ==================// Assignment #5====================
// // =================// JAVASCRIPT===========================
// // ================// MATH EXPRESSIONS ===========================
// Question:01

// var num1 = 3;
// var num2 = 5;
// var sum = num1 + num2;
// var sub = num2 - num1;
// var multi = num2 * num1;
// var divi = num2 / num1;
// var modulus = num1 % num2;

// document.write("Sum of " + num1 + " and " + num2 + " is " + sum + "<br><br>");
// document.write("Sub of " + num1 + " and " + num2 + " is " + sub + "<br><br>");
// document.write("Multiplication of " + num1 + " and " + num2 + " is " + multi + "<br><br>");
// document.write("Division of " + num1 + " and " + num2 + " is " + divi + "<br><br>");
// document.write("Modulus of " + num1 + " and " + num2 + " is " + modulus + "<br><br>");

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:02

// var empty ;
// var initial = 5;

// document.write("Value after variable declaration is: " + empty + "<br><br>");
// document.write("Initial value is: " + initial + "<br><br>");
// initial++;
// document.write("Initial value after increment: " + initial + "<br><br>");
// initial = initial + 7
// document.write("Initial value after addition is: " + initial + "<br><br>");
// initial--
// document.write("Initial value after decrement is: " + initial + "<br><br>");
// initial = initial % 2;
// console.log(initial);

// document.write("The remainder is: " + initial + "<br><br>");

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------

// Question:03

// var tickets = 600;
// var userInput = prompt("How many tickets your are buying")
// var numberofticket = (userInput)

// document.write("Total cost to buy "+ numberofticket + "  tickets to a movie is " + tickets*userInput + "PKR" )


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:04


// var tableOf = prompt("Table of") ;


// document.write("<h1>"+"Table of ", tableOf +"</h1>" + "<br><br>")
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*1) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*2) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*3) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*4) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*5) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*6) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*7) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*8) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*9) + "<br></br>" )
// document.write( tableOf + " x " + 1 + " =  " + (tableOf*10) + "<br></br>" )

// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:05


// var cen = prompt("Centegrade to Fahrenheit");
// var fan = prompt("Fahrenheit to Centegrade ");

// var cenFormula = (fan - 32) * 5 / 9;
// var fanFormula = (cen * 9 / 5) + 32;

// document.write( cen + " &#8451 "+ " is " + fanFormula + "&#8457" +"<br></br>")
// document.write( fan + " &#8457 "+ " is " + cenFormula + "&#8451")


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:06

// alert("we are seling only tomato and potato");
// var potatoKg = prompt("How many kg potato you want");
// var tomatoKg = prompt("How many kg tomato you want");
// var potato = 100;
// var tomato = 150;
// var shiping = 100;
// var totalCost = potatoKg*potato+tomato*tomatoKg+shiping;

// document.write("Price of Potato: " + potato+"<br></br>");
// document.write("quantity of Potato: " + potatoKg+"KG"+"<br></br>");
// document.write("Price of Tomato: " + tomato +"<br></br>");
// document.write("quantity of tomtato: " + tomatoKg+"KG"+"<br></br>");
// document.write("Shiping charges: " + shiping +"<br></br>")
// document.write("Total cost of your order is: " + totalCost)


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:07

// var totalMarks = prompt("Enter Total Marks");
// var obtainMarks = prompt("Enter obtained Marks");
// var percentage = obtainMarks / totalMarks * 100;
// document.write("<h1>Mark Sheet</h1>" + "<br></br>");
// document.write("<h1>" +"Total Marks: ",totalMarks +"</h1>" + "<br></br>");
// document.write("<h1>" +"Obtained Marks: ",obtainMarks +"</h1>" + "<br></br>");
// document.write("<h1>" +"Percentage: ",percentage +"</h1>" + "<br></br>");


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:07

// var converter = prompt("USD to PKR");
// var usd = 1;
// var pkr = 277.45;
// var convert = converter*pkr;
// document.write("<h1>Currency in PKR</h1>" + "<br></br>");
// document.write("Total currency in PKR: " + convert);



// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:08

// var singleExpression = (5*10)/5
// alert(singleExpression)


// ----------------------------------------------------------------------------------------------
// ----------------------------------------------------------------------------------------------


// Question:09

// var birthYear = prompt("Enter birth year!");
// var currentYear = 2024;
// var age = currentYear-birthYear;

// document.write("<h1>Age calculator:</h1> " + "<br></br>");
// document.write("Current Year: " + currentYear+ "<br></br>");
// document.write("Birth Year: " + birthYear+ "<br></br>");
// document.write("Your Age: " + age);




// // ==================// Assignment # 5====================
// // =================// JAVASCRIPT===========================
// // ================// End===========================




// // ==================// Assignment #6====================
// // =================// JAVASCRIPT===========================
// // ================// MATH EXPRESSIONS ===========================
// // ================// Start ===========================

// Question:01

// var a = 10;
// a = ++a;
// document.write("The value of ++a is :" + a + "<br>")
// document.write("Now the value of a is :" + a + "<br><br>")


// document.write("The value of a++ is :" + a + "<br>")
// a++;
// document.write("Now the value of a is :" + a + "<br><br>")

// --a;
// document.write("The value of --a is :" + a + "<br>")
// document.write("Now the value of a is :" + a + "<br><br>")

// document.write("The value of a-- is :" + a + "<br>")
// a--;
// document.write("Now the value of a is :" + a + "<br><br>")


// // ==================// Assignment # 6====================
// // =================// JAVASCRIPT===========================
// // ================// End===========================
