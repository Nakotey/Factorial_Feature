const Calculate = {
factorial(input){
 for(let i = input-1; i >= 1; i--){
   if (input === 0){
     return 1;
   }
  input = input * i;
 }
 return input
  }
}

module.exports = Calculate;


