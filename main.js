function add(a,b){
    setTimeout(function(){
        console.log(a+b)
       },2000)
}
add(2,3)

function multiply(a,b){
   setTimeout(function(){
    console.log(a*b)
   },5000)
}
multiply(9,8)


function divide(a,b){
    b(a())
    setTimeout(function(){
        b(3,3,a(1,1))
       },6000)

  
 }
 divide(add,multiply)

