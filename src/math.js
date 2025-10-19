function add(a,b){return a+b}
function multiply(a,b){
  if(typeof a !== 'number' || typeof b !== 'number'){
    throw new Error('Both arguments must be numbers');
  }
  if(isNaN(a) || isNaN(b)){
    throw new Error('Arguments cannot be NaN');
  }
  return a*b;
}
module.exports = { add, multiply }