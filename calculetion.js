// Object.onclick=function(){
// let a,b;
// a=+prompt("enter a","3");
// b=+prompt("enter b","4");
// let ans=a+b;
// alert("Sum of a and b is -->"+ans);
// }

document.getElementById("demo").onclick = function() {myFunction()};

function myFunction() {
    let a,b;
    a=+prompt("enter a","3");
    b=+prompt("enter b","4");
    let ans=a+b;
    document.getElementById("demo").innerHTML = "ANSWER IS -->"+ans;
}