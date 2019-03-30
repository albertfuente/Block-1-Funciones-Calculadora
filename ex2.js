
// create a result array where you store the results:
var result=[];
//function of calculator:
function calculator(){
  var numF=prompt("enter first number:");
  var num1=Number(numF);
  var numS=prompt("enter second number:");
  //check if only 1 number is entered and gives its squareroot:
  if(numS === ""){
    var n= num1*num1;
    var s= (num1 + "*" + num1 +"=" +(n%1? n.toFixed(3): n));
    result.push(s);
    console.log("num1*num1 = "+ result);
  }else{
  var num2=Number(numS);
  var operation=prompt("choose a function: + , - , / , *:");
  //checks each case:
  switch (operation){
    case "+":
      var n= num1+num2;
      var s= (num1+" + "+num2+ " = "+(n%1? n.toFixed(3): n));
      result.push(s);
      break;

    case "-":
      var n= num1-num2;
      var s= (num1+" - "+num2+ " = "+(n%1? n.toFixed(3): n));
      result.push(s);
      break;

    case "/":
      var n= num1/num2;
      var s= (num1+" / "+num2+ " = "+(n%1? n.toFixed(3): n));
      result.push(s);
      break;

    case "*":
      var n= num1*num2;
      var s= (num1+" * "+num2+ " = "+(n%1? n.toFixed(3): n));
      result.push(s);
      break;
    default:
      console.log("function wrongly choosen, please enter a correct function:");
      break;
    }
  }
}
//calls the Calculator:
var numberIntoArray = calculator();
console.log(result);
//Checks if more operations:
var repeat=prompt("more operations?: yes or no:");
do{
  var numberIntoArray = calculator();
  console.log(result);
  var repeat=prompt("more operations?: yes or no:");
}
while(repeat==="yes");
if(repeat==="no"){
  console.log("Goodbye");
}else{
  console.log("Error");
}
