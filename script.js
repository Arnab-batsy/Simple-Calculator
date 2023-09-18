// All the rest added Inline

var equal= document.querySelector(".equal");
var display= document.querySelector(".display input");
equal.addEventListener("click", function(){
    var x= eval(display.value);
    display.value= x;
});