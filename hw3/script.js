function Solve(val) {
  var v = document.getElementById('res');
  v.value += val;
}

function calculateFactorial() {
  var num1 = document.getElementById('res').value;
  if (num1.includes('!')) {
     var num = parseInt(num1.slice(0, -1));
     var result = factorial(num);
     document.getElementById('res').value = result;
   }
}

function Result() {
  var expression = document.getElementById('res').value;
  if (expression.includes('!')) {
     calculateFactorial()
   }
   else if (expression.includes('^')){
     calculateExponent()
   }
   else if(expression.includes('E')){
     calculateExponentOf()
   } else if(expression.includes('Sqrt->')){
     solveSquarert()
   } else {
     solvebasic()
   }
}

function solveSquarert(){
 var num1 = document.getElementById('res').value;
 var parts = num1.split('->');
 if (parts.length === 2) {
   var value = parseFloat(parts[1]);
   var sqroot = Math.sqrt(value);
   document.getElementById('res').value = sqroot;
 }

}

function calculateExponent() {
  var num1 = document.getElementById('res').value;
  var parts = num1.split('^');
  if (parts.length === 2) {
    var base = parseFloat(parts[0]);
    var exponent = parseFloat(parts[1]);
    var result = Math.pow(base, exponent);
    document.getElementById('res').value = result;
  }
}

function calculateExponentOf(){
  var num1 = document.getElementById('res').value;
  var parts = num1.split('E');
  if (parts.length === 2) {
    var base = parseFloat(parts[0]);
    var num2 = parseFloat(parts[1]);
    var getExp = Math.pow(10, num2);
    var result = base * getExp;
    document.getElementById('res').value = result;
  }
}

function solvebasic(){
  var num1 = document.getElementById('res').value;
  var num2 = eval(num1);
  document.getElementById('res').value = num2;

}

function Clear() {
  var inp = document.getElementById('res');
  inp.value = '';
}

function factorial(x) {
  if (x === 0 || x === 1) {
    return 1;
  } else {
    return x * factorial(x - 1);
  }
}
