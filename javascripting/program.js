 function repeat(operation, n){
   if(n==0){
       return operation();
   } else{
       return operation(n-1);
   }
}
module.exports =repeat



