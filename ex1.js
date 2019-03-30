// A Primero, creamos un afunción que nos cree un saludo, pasa tu nombre como parámetro y devuelvelo por la ocnsola.
function name(myName){
  console.log(`Hello ${myName}`);
};
name("Albert");
// B Intenta retornar los valores en lugar de usar console.console.log(
function name2(myName2){
  return (`Hello ${myName2}`);
};
name2("Albert");
// C Ahora añade tu edad y concaténala al return

function name3(myName3,age){
  return (`Hello ${myName3}, you are ${age} old`);
}
name3("Albert",31);

// D Iguala tu función a una variable y ejecútala
var myFunction= name3("Albert",31);
console.log(myFunction);

//E Ahora declara otra función que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir su dos resultados concatenados
function myAge(age){
  return age;
}
var age= myAge(40);
var completeNameAge= (name2("John")+ age);
console.log(completeNameAge);

// F Ahora, todas las variables deberían ser pasadas como parámetro a las funciones
var param1= ("Mick");
var param2= (20);
name(param1)+console.log(myAge(20));

//G Intenta englobar todas las funciones en una sola función padre, el return de dicha función padre deberá ser la llamada a las funciones hijas. (En el ejemplo tenemos la function "personData" que engloba la funcion name y age, cada una es una función hija o anidada dentro de la función personData):
// PROBLEMAS????
function personData(){
  var n= function myName4(name){
    console.log(name);
  }

  var a= function age2(age){
    console.log(age);
  }

  return n+a;
}
personData("IronMan",40);

// H Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age()
function personData2(name){
  function myName5(){
    return name;
  }

  function age3(){
    return Math.floor(Math.random()*100);
  }

  return (myName5()+": "+age3());
}
console.log(personData2("Laura"));

// I Al return de la función name(), concaténale otro mensaje
function name(myName){
  console.log(`Hello ${myName} aka IronMan, 34... Sure you are ${myName}?`);
}
name("Albert");

// J Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable
function personData2(name){
  function myName5(){
    return name;
  }

  function age3(){
    return Math.floor(Math.random()*100);
  }

  console.log(`the first function returns: ${myName5()} and the second function returns: ${age3()}`);
}
personData2("Laura");

//K Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada
function personData3(name){
  if(name!==("Albert")){
    function myName5(){
      return name;
    }
    console.log(`the first function returns: ${myName5()} you are not Ironman!!!`);
  }else{
    function myName5(){
      return name;
    }
    function age3(){
      return Math.floor(Math.random()*100);
    }
    console.log(`the first function returns: ${myName5()} and the seoncd function returns: ${age3()}`);
  }
}
personData3("Laura");
