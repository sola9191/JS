//alert("Hello I'm JS.");
//console.log("Hello!!!!!");
/*
const a = 221; //변수에 초기화된값 바꿀수없음
let b = 44; //변수가 바뀌는 것을 허용

//변수에 어떤거 넣을수있나?
//1. String
const what = "hahahaha";
console.log(what);
//2. Boolean
const wat = true;
console.log(wat);
//3. number
const  num = 12345;
console.log(num);
//4. float
const flo = 123.11;
console.log(flo);

//Organizing Data with Arrays
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", 54, true];
//변수를 언제나 소문자로 시작하고 스페이스 넣고싶으면대문자넣어야함

console.log(daysOfWeek);

//Organizing Data with Objects
const nicoInfo = {
  name:"Nico",
  age:33,
  gender:"Male",
  isHandsome:true,
  favMoive : ["Oldboy", "Rebbeca", "LOTR"],
  favFood: [  
  {
    name : "kimchi", 
    fatty: false
  }, 
  {
    name : "Cheese burger",
    fatty: true
  }
  ]
  
};
console.log(nicoInfo.gender);
console.log(nicoInfo);
console.log(console)

//fuction(함수)

function sayHello(){
  console.log("Hello");
}

sayHello();


function sayHello2(name, age){
  return `Hello ${name} you are ${age} years old`; //""나 ''는 X
}


const returnTest = sayHello2("sola", 30)
console.log(returnTest)
*/

//############################ 2.2 JS DOM Fuctions
//############################ 2.3 Modifying the DOM with JS
//const title = document.getElementById("title"); //document--> object
//const title = document.querySelector("#title");
//DOM: Document Object Module
//자바스크립트는 html에 있는 모든 요소를 가져와서 객체(Object) 형태로 바꿀수있음
//title.innerHTML = "Hi From JS"; // 실제 html이 바뀜
//title.style.color = "red";
//document.title = "hehehehe";
//console.dir(title)

//############################ 2.5 Events and event handlers

// 자바스크립트는 이벤트에 반응하기 위해서 만들어짐
// 이벤트:웹사이트에서 발생하는것 input, alert, submit....
/*
const title = document.querySelector("#title");
const BASE_COLOR = "rgb(52, 73, 94)";
const OTHER_COLOR = "red";
// 상수는 보통 대문자로 선언해줌

function handleResize(){
  console.log("I have been resized")
}
window.addEventListener("resize", handleResize ); //funtion 부르는데 handleResize()로 안씀 
*/
/*
function handleClick(){
  const currentColor = title.style.color;
  console.log(currentColor);
  if(currentColor===BASE_COLOR){
    title.style.color=OTHER_COLOR;
  }else{
    title.style.color=BASE_COLOR;
  }
}
function init(){
  title.style.color = BASE_COLOR;
  //title.addEventListener("click", handleClick);
  title.addEventListener("mouseenter", handleClick);
// 클릭하면 글씨 색깔 바뀜  
}

init()

//HTML JavaScript DOM event Modifying
//이벤트의 근원을 찾고싶을때는 MDN찾기
*/
const title = document.querySelector("#title");
const CLICKED_CLASS = "clicked";

function handleClick(){

  // const hasClicked = title.classList.contains(CLICKED_CLASS);
  // if (!hasClicked) {

  //   title.classList.add(CLICKED_CLASS);

  // }else{
  //   title.classList.remove(CLICKED_CLASS);
  // }
   title.classList.toggle(CLICKED_CLASS); //위의 기능을 다해주는 함수 toggle
}
function init(){
  title.addEventListener("click", handleClick);
}
init()


