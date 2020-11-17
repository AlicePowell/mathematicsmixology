// function name (parameters) {action}
// function returnHello(){
//     return '...thoughtful...'}
  
//   var greeting = returnHello();
//   console.log(greeting);



// add Javascript to prime number buttons to respond with BOOM and then a link
var primeTick = 0

function windowBoom(id) {primeTick +=1; 
  console.log(primeTick);
  if (primeTick>3) {window.location="../index.html"}
   else id.innerHTML = "BOOM!"; 
   id.style.color="rgb(215, 224, 252)";
   id.style.fontSize = "3vw";
   //id.innerHTML.fontFamily="var(--Boom)"; 
 };

function click1(id) {windowBoom(id)};
function click2(id) {windowBoom(id)};
function click4(id) {windowBoom(id)};
function click5(id) {windowBoom(id)};
function click7(id) {windowBoom(id)};


//Composite numbers
function click3(id) {id.innerHTML = "..oops";};
function click6(id) {id.innerHTML = "..oops";};
function click8(id) {id.innerHTML = "..oops";};
function click9(id) {id.innerHTML = "..oops";};

 

// Counting button every time you click
//pink for prime pale for composite
var count=0;
var button = document.getElementById("clickme"); 


button.onclick= function primeCount ()
 {count+=1;
  button.innerHTML=count;
  document.getElementById("clickme").style.color="rgb(215, 224, 252";
  document.getElementById("clickme").style.fontSize="7vw";
  if 
  ((count===2)||(count===3)||(count===5)||(count===7)||(count===11)||(count===13)||(count===17)||(count===19)||
  (count===23)||(count===29)||(count===31)||(count===37)||(count===41)||(count===43)||(count===47)||(count===53)||
  (count===59)||(count===61)||(count===67)||(count===71)||(count===73)||(count===79)||(count===83)||(count===89)||(count===97))
  {document.getElementById("clickme").style.color= "rgb(228, 64, 4)";
  };
  if (count===99) {count=0};
};



