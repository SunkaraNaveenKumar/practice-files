/* All Links
css selectors -https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors

*/
/*
pre-requisites
install vscode
install node
install git -> https://git-scm.com/download/win
install locator.js 
install ES7+ React/Redux/React-Native snippets  for snippets
*/
/*
s10-10
useCase 1:
const func = (...args)=>{
console.log(args);
}
func(10,20,30);
useCase 2:
const func = (...args)=>{
  console.log(args);
  }
  func([10,20,30]);

useCase 3:
const func = (...args)=>{
  console.log(args);
  }
  func("12345");
  useCase 4:
  const func = (a,b,c)=>{
  console.log(arguments.length);
  }
  func(10,20,30);
*/

// function func(){
//   console.log(arguments.length);
//   }
// func(10,20,30);
////////////////////////////////// remove whitespaces  in a irregular string
// let myString = "This    is   a  string   with    irregular   spaces";
// let words = myString.split(/\s+/);
// console.log(words);
////////////////////////////////// remove whitespaces without using regular expressions
// let myString = "This    is   a  string   with    irregular   spaces";
// let words = myString.split(" ").filter(function(str) {
//   return str !== "";
// });
// console.log(words);
/////////////////////////////////////
/*
short cut visual studio key
copy line to down or up -> shift + alt + up arrow/down arrow
close the side bar -> ctrl +b
select the word -> ctrl +d
code formating -> shift + alt +f
search for folder or file -> ctrl +p
select the current line -> ctrl +l
move the line -> alt +up/down
single line commenting -> //  -> ctrl+?
multiline commenting ->  -> ctrl +?

*/
// //                                                implimenting slice method
// let a = "naveen"
// console.log(a.slice(0, 3)); // nav
// console.log(a.slice(0)); // naveen
// console.log(a.slice(2,1)); // empty string
// console.log(a.slice(-2,-4));// empty string
// console.log(a.slice(-4,-2))
// console.log(a.slice(-4,1))// empty string
// let b = [1, 2, 3, 4, 5, 6];
// console.log(b.slice(0, 3));
// console.log(a.slice(2,1)); // []

//                                                      adding operators
// console.log(1+"3"+2);
// console.log(1+2+'3');
// console.log(1+2-'3');
// console.log('3'+'2');
// console.log("a"+"B");
// console.log("a"-"b");
/////////////////////////////////////////////////////////////  scoping
// var - functional scoping
// let & const block level scoping
// /////////////////////////usecase1
// function name(){
//  var a=20
// if(true){
//   var b=10
// }
// console.log(a,b);
// }
// name()
// //////////////////////////////////usecase2
// function name(){
//   const  a=20
//  if(true){
//    const b=10
//  }
//  console.log(a,b);
//  }
//  name()
/////////////////////////////////////////usecase3
// function name(){
//     var b=20
//  if(true){
//    let a=10
//  }
//  console.log(a,b);
//  }
//  name()
///////////////////////////////////////////////////////////////

// what is ssr
// link:https://swarup-karavadi.medium.com/ssr-with-react-9cb197cfe380
// ssr is nothing loading html first and loading scripts later
// csr is loading html along with the scripts at a time
// soo ssr loading increased seo optimization
// difference between useEffect and useMemo
// usememo returns the memorized value but useEffect doesnt
// difference  between useEffect and useLayout effect

// spread operator on string
// const a = "123";
// console.log([...a]);
// const b = 1;
// console.log("a".charCodeAt(0));
//                                                   convert number to alphabet

///////////////////////////                           parse empty string
// console.log(parseInt(""));
///////////////////////////                           reverse a array or string wihtout reverse keyword and use the same array or string

// function reverseString(str) {
//   let strArray = str.split('');  // Convert string to an array of characters
//   let len = str.length;
//   for (let i = 0; i < len / 2; i++) {
//     // Swap characters at opposite ends of the string
//     let temp = strArray[i];
//     strArray[i] = strArray[len - 1 - i];
//     strArray[len - 1 - i] = temp;
//   }
//   return strArray.join('');  // Convert the array back to a string and return it
// }

// console.log(reverseString("Hello World"));
///////////////////////////////////////// cant change the value of string by using a[1]="b"
// const a ="nave"
// a[1]="b"
// console.log(a[1]);
// console.log(a);
/////////////////////////////////////// inside foreach unknown facts  (break , return , continue doesnt work in forEach)
// const a=[1,2,3].forEach((ele)=>{
//   if(ele==2){
//     return ele+2
//   }
//   return ele
// })
// console.log(a);
////////////
// [1,2,3].forEach((ele)=>{
//   if(ele===2){
//     return ele
//   }
//   console.log(ele);
// })  // 1 3
////////////////////////
// [1,2,3].forEach((ele)=>{
//     if(ele===2){
//       break;
//     }
//     console.log(ele);
//   })
// Illegal break statement

////////// ///////////////////////////////////////// pop unknown facts
// const a=[1,2,3,0,4]
// console.log(a.pop())
// if(a.pop()){
//   console.log(a)
// }
// console.log(a)
////////////////////////////////////////////////////// deep copy imp facts
// const a ={foo:2,bar:{a:1,b:2}}
// const b=a
// b.foo=3
// a.foo=4
// b.bar.a=2
// a.bar.a=5
// console.log(a,b);
/////////////// deep copy is not working in the below code
// const a=[{name:"nav"},{name:"een"}]
// const b=[...a]
// b[0].name="naveen"
// console.log(a,b);
// ///////////solution
// const sol = a.map(ele=>{
//   return {...ele}
// })
// sol[0].name = "vishnu"
// console.log(a,sol);
//////////////////////////////////////// currying in js
// function outer (x){
//   return function inner (y){
//     return x+y
//   }
// }
// let a= outer(5)
// console.log(a(6));
///////////////////////////////////////////  imp
// Array.prototype.myFilter=function(callBack){
//     const res=[]
//     for(let i=0;i<this.length;i++){
//        res.push(callBack(this[i]))
//     }
//     return res
// }
// const arr=[10,20,30]
// const greet=(ele=>{
//     return ele>10
// })
// const result=arr.myFilter(greet)
// console.log(result)
// Array.prototype.myMap=function(callBack){
//     const res=[]
//     for(let i=0;i<this.length;i++)
//     {
//         res.push(callBack(this[i]))
//     }
//     return res
// }
// const arr=[10,20,30]
// const result=arr.myMap((ele)=>{
//     return ele+5
// })
// console.log(result)
// Array.prototype.mySome=function(callBack){
//     let flag=false
//     for(let i=0;i<this.length;i++){
//         if(callBack (this[i])){
//             flag=true
//         }
//     }
//     return flag
// }
// const arr=[189,10,23,12]
// const result=arr.mySome(ele=>{
// return ele===1
// })
// console.log(result)
// const arr=[1,2,3,4,5]
// let sum=0;
// arr.forEach(ele=>{
//     sum+=ele
// })
// console.log(sum)
// const arr=[1,2,3,4,5]
// const result=arr.reduce((acc,cv)=>{
//     return acc+cv
// },0)
// console.log(result)
//////////////

////////////////////////////////
// Sample code to perform I/O:

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     process.stdout.write("Hi, " + input + ".\n");       // Writing output to STDOUT
// }

// Warning: Printing unwanted or ill-formatted data to output will cause the test cases to fail

// Write your code here

///////////////////////////////////////
// process.stdin.on('data',function(data){
//     process.stdout.write(data.toString()) ;
// })
// process.stdin.on("end", function () {
//     main(stdin_input);
//  });

// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     let num = parseInt(input, 10);

//     for(let i =1;i<=num;i++){
//         if(i%5==0 && i%3 == 0){
//             // console.log("FizzBuzz")
//             process.stdout.write("FizzBuzz\n")
//         }else{
//             if(i%3==0){
//             // console.log("Fizz")
//             process.stdout.write("Fizz\n")
//             }
//             if(i%5==0){
//             // console.log("Buzz")
//             process.stdout.write("Buzz\n")
//             }
//         }

//         if(i%5!=0 && i%3 != 0){
//             // console.log(i);
//             process.stdout.write(""+i+"\n")
//         }
//     }       // Writing output to STDOUT
// }
///////////////////////
// process.stdin.resume();
// process.stdin.setEncoding("utf-8");
// var stdin_input = "";

// process.stdin.on("data", function (input) {
//     stdin_input += input;                               // Reading input from STDIN
// });

// process.stdin.on("end", function () {
//    main(stdin_input);
// });

// function main(input) {
//     let a = input.length
//     let zcount=0
//     let ocount=0
//     for(let i=0;i<a;i++){
//         if(input[i]==='z'){
//             zcount=zcount+1
//         }
//         if(input[i]==='o'){
//             ocount++
//         }
//     }
//     if(ocount === (2*zcount)){
//        process.stdout.write('Yes');
//     }else{
//          process.stdout.write('No');
//     }
// }

///////////////////////////////////////////////////////////////////////

// const items = {
//     'first': "John",
//     'second': "Karl",
//     'third': "Amy",
//   }
//  for(let key in items){
//     console.log(items[key]);
//  }
// const arr=[1,3,5,7,6,8,-1,0,9,2,4]
// let n=3
// let mainSum =0
// let sum
// for(let i=0;i<arr.length-2;i++){
//     sum=0
//     for(let j=0;j<n;j++){
//         sum+=arr[i+j]
//      }
// if(sum>mainSum){
//     mainSum=sum
// }
// }
// console.log(mainSum);
// function findPairWithGivenSum(arr, targetSum) {
//     let map = new Map();
//     for (let i = 0; i < arr.length; i++) {
//       let difference = targetSum - arr[i];
//       if (map.has(difference)) {
//         return [difference, arr[i]];
//       } else {
//         map.set(arr[i], true);
//       }
//     }
//     return [];
//   }
//   console.log( findPairWithGivenSum([1,2,3,4,5,6,7,8],7));
///////////////////
///
///
// function autoComplete(arr,input){
//     // for(let i=0;i<arr.length;i++){
//     //     const a =arr[i].split('')
//     //     for(let j=0;j<a.length;j++){
//     //         if(a[j]==a[i])
//     //     }
//     // }
//    const filterArr = arr.filter(ele=>{
//     const element=  ele.split('')
//     return element.filter(ele=>{
//         return
//     })
//    })
//    return filterArr

//  }
//  let input2 = ["aham","am1","am2","uytam","afgh"]

// console.log(autoComplete(input2,"am"))
// console.log('anil')
// for(let i=0;i<4;i++){
//     setTimeout(function(){
//         console.log(i);
//     },1000)
// }
// console.log('apple');
// function outerfn (x){
//     return function innerfn(y){
//          return x+y
//     }
// }
// let a = outerfn(10)
// console.log(a(5));

// let a = [1,2,3]
// const sumdata = a.reduce((acc,val)=>{
// return acc+val
// },0)
// console.log(sumdata);
////////////
// const arr =[
//     {id:1,name:"anil",percentage:10},
//     {id:2,name:"paresh",percentage:20},
// ]
// const filter=[]
// let sum=arr.reduce((acc,val)=>{
//     return acc+val.percentage
// },0)
// console.log(sum);
// for(let i=0;i<arr.length;i++){
//     if(arr[i].percentage<20){
//       filter.push(arr[i])
//     }
// }
// console.log(filter);
///////
// let input = "am";
// let strings = ["amm21", "amsdffeam","am52352","wefhvwhjvam"];

// let result = strings.filter(str => str.toLowerCase().startsWith(input.toLowerCase()));

// console.log(result);
///////
// function duplicateArr(arr){
// let obj={}
// let newArr=[]
// for(let i=0;i<arr.length;i++){
//     if(obj.hasOwnProperty(arr[i])){
//         obj[arr[i]]++
//     }else{
//         obj[arr[i]]=1
//     }
// }
// for(let item in obj){
//     if(obj[item]>1){
// newArr.push(item)
//     }
// }
// return newArr
// }
// let arr= [1 , 1 , 1 ,3 ,4 ,6 ,7 ,1 ,6 ,2 ,5 ,8 ,2]
// console.log(duplicateArr(arr));
////////
// function date(first,second){
//     let newFirst= first.split('/')
//     let newSecond =second.split('/')
//    if(newFirst[2]>newSecond[2]){
//     return second
//    }else if(newFirst[2]<newSecond[2]){
//     return first
//    }else{
//     if(newFirst[1]>newSecond[1]){
//         return second
//     }else if(newFirst[1]<newSecond[1]){
//         return first
//     }else{
//         if(newFirst[0]>newSecond[0]){
//             return second
//         }else{
//             return first
//         }
//     }
//    }
// }
// let firDate = "1/3/2019";
// let secDate = "2/8/2017";
// console.log(date(firDate,secDate));
//////////////////////////////////////////// compare two objects
// let object1 = { name: "John" };
// let object2 = { name:"John" };
// console.log(Object.is(object1, object2));

//////////
// let array1 = [1, 2, 3];
// let array2 = [1, 2, 3];
// console.log(JSON.stringify(array1) === JSON.stringify(array2));
/////////////////////////////////////////////////////////////////////////middlewars
//Middlewares in React are functions that process actions before they reach the reducer.
//They are commonly used to handle side effects such as making API calls, logging actions, or displaying notifications.
///////////////////    object methods
// const source1 = { a: 1, b: 2 };
// const source2 = { a: 3, d: 4 };
// const target = {a:4};
// source1["e"]=5
// Object.assign(target, source1, source2);
// target["f"]=5
// console.log(target);
// console.log(source1);
// // { a: 1, b: 2, c: 3, d: 4 }
/////////////////////////////////////////////////////////////////////////object.create()
//The Object.create() method is a static method of the Object class in JavaScript that creates an
//object with the specified prototype object and properties.
// const proto = {
//     greeting: function() {
//       console.log("Hello");
//     }
//   };

//   const obj = Object.create(proto);

//   obj.greeting();
/////////////////////////////////////////////////////////////////////////////////object.is()

// function outer(x){
//     return function inner(y){
//         return x+y
//     }
// }
// const newFn = outer(5)
// console.log(newFn(10));//12
// const newFn2 = outer(10)
// console.log(newFn2(10));//12

// (function(){
// console.log("prasanth");
// })()
// const nearst=(num)=>{
//     let sum=0
//  if(num%10>5){
//    sum= num + (10-(num%10))
//  }else{
//     sum = num - num%10
//  }
//  return sum
// }
// let num = 374456
// console.log(nearst(num));
/////////

// console.log(Math.min(1,2,3,4,1,1));
/////////////////////////////////////////////////////////////////////// alphabet or number
// let char = "a";  // try a = "2"
// let result =  isNaN(char);
// console.log(result);
/////////////////////////////////////////////////////////////////////// eleminate multiple white spaces
// let a ="this    is a      cat"
// console.log(a.replace(/\s+/g, ""));
/////////////////////////////////////////////////////////////////////// parseInt of string
// let a = "naveen"
// console.log(parseInt(a));
///////////////////////////////////////////////////////////////////////type of undefined and null
// console.log(typeof undefined, typeof null, typeof NaN);
///////////////////////////////////////////////////////////////////////call , apply . bind
// call with normal fn
// function Call(a){
//     return `${a} name is ${this.name}`
// }
// console.log(Call.call({name:"naveen"},"my"));
// call with array function
// const Call=(a)=>{
//     return `${a} name is ${this.name}`
// }
// console.log(Call.call( {name:"naveen"},"my"));
/////////////////////////////////////////////////////////////////////// shadowing in js
/*
Shadowing is a technique in JavaScript that refers to the process of declaring a variable with the same name as a
 variable in an outer scope. When you shadow a variable, the inner variable takes precedence over the outer variable
  within the scope of the inner variable. This can lead to unexpected behavior and bugs in your code if you're not careful.

*/
////////////////////////usecase 1

// let x = 10;

// function foo() {
//   console.log(x);
//   let x = 20; // remove let and test you will know the difference
//   console.log(x); // Outputs 20
// }

// foo();
// console.log(x);
//////////////

////////////////////////usecase 2
// const x=10
// function foo() {
//   x = 20;
//   console.log(x);
// }

// foo();
// console.log(x);
////////////////////////usecase 3

// let x=10
// function foo() {
// let b=x; // remove let and test you will know the difference
// b=20
//   console.log(b);
// }

// foo();
// console.log(x);
/////////////////////////////////////////////////////////////////////// promises finally keyword
/*
The finally keyword in React is used in conjunction with a try/catch block to execute some code regardless of 
whether an exception is thrown or not. The finally block is optional and comes after the catch block.
 */
/// javascript example
// const promise = new Promise(function(response,reject){

//   if(true){
//     response(2)
//   }else{
//     reject(4)
//   }
// })
// promise.then(function(res){
// console.log(res);
// return res*2
// })
// .catch(function(rej){
//   console.log(rej);
// })
// .finally(function(res){
//   console.log(res);
//   return res*2
// })
// .then(function(res){
// console.log(res);
// return res*2
// })

// .then(function(res){
//   console.log(res);
// })
////// react example
// function MyComponent() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(false);

//   useEffect(() => {
//     setLoading(true);

//     fetchData()
//       .then((data) => {
//         setData(data);  // Some code that may throw an exception
//       })
//       .catch((error) => {
//         console.error(error);  // Handle the exception
//       })
//       .finally(() => {
//         setLoading(false); // Code to be executed regardless of whether an exception is thrown or not
//       });
//   }, []);

//   return (
//     <div>
//       {loading ? (
//         <p>Loading...</p>
//       ) : (
//         <p>{data ? data : "No data found."}</p>
//       )}
//     </div>
//   );
// }

// async function fetchData() {
//   let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//   if (!response.ok) {
//     throw new Error(`HTTP error! status: ${response.status}`);
//   }
//   return response.json();
// }
//////////////////////////////////////////////////////////////// usememo logic
// function useMemo(fn, inputs) {
//   let cachedInputs = inputs;
//   let cachedResult = fn();

//   return function() {
//     let inputsChanged = false;

//     for (let i = 0; i < inputs.length; i++) {
//       if (inputs[i] !== cachedInputs[i]) {
//         inputsChanged = true;
//         break;
//       }
//     }

//     if (inputsChanged) {
//       cachedInputs = inputs;
//       cachedResult = fn();
//     }

//     return cachedResult;
//   };
// }

// const expensiveFunction = (a, b) => {
//   console.log('Computing expensive result...');
//   return a + b;
// };

// const memoizedFunction = useMemo(expensiveFunction, [1, 2]);

// console.log(memoizedFunction()); // Output: Computing expensive result... 3
// console.log(memoizedFunction()); // Output: 3

// const anotherMemoizedFunction = useMemo(expensiveFunction, [2, 3]);

// console.log(anotherMemoizedFunction()); // Output: Computing expensive result... 5
// console.log(anotherMemoizedFunction()); // Output: 5
////////////////

// let expires=new Date();
// expires.setTime(1);
// console.log(expires.toUTCString());
///////////////        rest operator and spread operator difference
// function sum(...numbers) {
//   console.log(numbers);
//   return numbers.reduce((acc, val) => acc + val, 0);
// }

// console.log(sum(1, 2, 3, 4)); // 10

/////////////////////////////////////////////////////////// deep copy and shallow copy very important example
// let a =[{name:"naveen"},2,3]
// let b = a.map(ele=>{
//   if (typeof ele ==="number"){
//     return ele
//   }else{
//     return {...ele}
//   }
// })
// b[0].name= "pravin"
// b.push(4)
// console.log(b,a)
///////////////////////////////////////////////////////////////// important code
// let  res1= "js"|| "" || null
// let res2= "js" ||"es"||"react"
// let res3= "js" && "es"&&"null"
// let res4= "js"&& "es" && "rj"
// console.log({res1, res2,res3, res4})
///////////////////////////////////////////////////////////////// generator function
// it pauses and resumes the function
// usecases - redux saga
// function* myGen(){
//   yield console.log("1");
//   yield console.log("2");
//   console.log("3");
// }
// // console.log(myGen().next())
// let a = myGen()
// console.log(a.next());
// console.log("naveen")
// a.next()
// console.log(a);
// console.log(a.next())
/////////////////////////////shallow and deep copying of array of objects
// let arr1 = [{name:'naveen'},{name:'vik'}]
// let arr2=arr1
// arr2[0].name="vik"
// console.log(arr1)
// let notdeepCopy = [...arr1] // shallow copied because we are spreading the arr elements and not spreading each and every element
// notdeepCopy[0].name ="mom"
// console.log(arr1)
// const deepcopy = arr1.map(ele=>{
//   return {...ele}
// })
// deepcopy[0].name="ush"
// console.log(arr1) // deep coped
///////////////////////////////////////////////////// example question
// const a=[1,2,3]
// a[10]=10
// console.log(a);
////////////////////////////////////////////////// example question
// const a =[1,2,3].map((ele)=>{
//   if(typeof ele === 'number')return;
//   return ele*2

// })
// console.log(a)
//////////////////////////////////////////////////// example question
// console.log(typeof this)
/////////////////////////////////// which will be first promises , setTimout or normal
// function Name(){
//   let p =new Promise((res,rej)=>{
//     if(false){
//       res("true")
//     }else{
//       rej("false");
//     }
//   })
//   p.then((res)=>{
// console.log(res)
//   }).catch((err)=>{
//     console.log(err)
//   })
//   setTimeout(()=>{
//     console.log("nave")
//   },0)
//   console.log("naveOuter");
// }
// Name()
//////////////////////////////////////// currying

//////////////////////////////////////// apply ,call ,bind

// function Name(a,b,c){
//   console.log(this.name)
//   console.log(a)
// }
// Name.call({name:'naven'},1,2,3)
/////////////////////////////////////////// typeof function
// console.log(typeof function()) // error
// function Name (){

// }
// console.log(typeof Name)// function
// console.log(typeof Name());// undefined
// typeof arrow function
// const Name =()=>{

// }
// console.log(typeof Name);
////////////////////////////////////////////////////////// use Strict
// function Strict (){
//  'use strict'
//   a=2
//   // 'use strict'
//   return a
// }
// console.log(Strict())
////////////////////////////////////////////////////////////////////
/* background running
1) only useEffect with []
component -> render -> useEffect
2) update using useEffect 
component -> render -> useEffect -> component ->render ......
3) useLayoutEffect -> (if there is both useEffect and useLayoutEffect,this executes before useEffect  and 
  before the DOM tree got updated) 

 */
/*1)to install jest
npm i --save-dev jest
then change scripts->test:"jest"
2)tO SET PORT NUMBER
  TWO METHODS
  1) go to package.json ->scripts -> "scripts": {
    "start": "set PORT=3003 && react-scripts start"},
    2) create .env file and write (PORT = 3003)
3) event propagation ->(def: The event propagation mode determines the order in which elements receive the event .
   Two ways of EP is (1 event bubbling 2)event Capturing ))
4) event bubbling ->(use onClick() event)( definition: events exectuting from child to  top of the ancester parent)-> to stop event bubbling (e.stopPropagation())
5) event capturing ->(use onClickCapture event) (opp. to event bubbling )-.(definition: events exectuing from the parent to the child if we click on the child)->to stop event bubbling (e.stopPropagation())
6)closures =>(fn + lexical scoping)( a closure is a fn that references variables in the outer scope from its inner scope) 
   -scoping of variable or function having access anywhere inside the children functions 
7) deep copy -A deep copy means that all of the values of the new variable are 
copied and disconnec)ted from the original variable (arrays->concate,slice,spread operators , object -> assign, spread operator)
8) shallow copy -A shallow copy means that certain (sub-)values are still connected to the original variable. 
9) function parameters-> function (par1,par2,par3), function arguments -> functionName(arg1,arg2,arg3)
10)callBack fn: function that is passed as an argument to the other fn is called as callback fn.
11) for (var i=0;i<3;i++){
  setTimeOut(()=>{
    console.log(i)
  },1000)
}
// output : 3 repeated three times why ?
12)for (var i=0;i<3;i++){
  ((i)=>{setTimeOut(()=>{
    console.log(i)
  },1000)
})(i);
}
// again using IIFE(immediately invoked function is working as expected, why?)

13)performance optimization hooks - useCallback and useMemo 
1) useMemo - if there is a logic thats taking time to execute and effecting the component and other components whenever 
the component got re-rendered by changing the state value, then use useMemo() hook, 
if we write some login in useMemo() hook it doesnt execute unneccessarily when it is not needed.

14) react.memo()- used to stop unwanted rendering of the components when they are not used
15) react snippets ->https://github.com/chillios-ts/vscode-react-javascript-snippets/blob/HEAD/docs/Snippets.md
16) react 18+
// suspense 
// Automatic batching - if there is any asynchrous operation(api call or logic thats taking time example setTimout)
which updates the multile states at the same time then all states are updated and component renders only one time
But in react 17 or older versions multiple states got updated and component renders multiple times.
  // concurrency -if there are multiple states in a component and all states got updated once then prevously(before react 18) after the one state update later it goes to the next state update in the component.
  but now we can set the priorities to the state (low priority) by using useTransition() councurrent api
  *concurrent aps
  1) useTransition()->for functional Components and startTransition()->uses in places where hooks cant be used(for class components) 
  * by using this we can assign low priority to the state update and render the component with all the high priority
  state updates.
  * previously all the states are updated line by line and after updating all the states then only it renders the component
  but now using useTransition()  if one of the state updating takes time then it moves to the next state updating
  and renders the component and , this time take taking state update will be running in background and once this 
  completes upadting then the component gets again re-rendered.
  DRAWBACK:
  By using useTransition there will be multiple re-renders of the component which is not soo good.
  2) useDeferredValue()->"Tell react" older value should diplay untill new value is obtained.
  // react 18 also introduced new hooks 
  (for example 1)useId 2)useInsertionEffect 3) useSyncExternalStore) 

17) virtual Dom - nothing but broswer dom 
18) Recoincillation - the process of updating the virtual dom is called as recoincilltion . 
       * Explanation: Actually there will two DOm's once is a actual Dom which will be present in our laptop memory and 
other is virtual DOm which is the copy of the actual DOM and it will be present in the Browser. Soo whenever there
is a change in data then actual DOM gets updated first and later Browser Dom is Compared with the actual
Dom and if there is any difference Found then the virtual DOm gets updated.
19) React.Fragment -> used where we dont need extra nodes to be added which effects styling and other aspects.
20) performance increase techniques 
  1) debouncing -if there is events peforming continuosly without gap then dont make any call to server till all the events are done ,
 * if there is no change in event handler till the given time then one call is sent to the server
2)throttling -even though if you click a button multiple time only one call should be sent to server upto particular given time 
* if the event needs to perform after the n secs and nsecs and nsecs
21) pure and impure components?
22) psudo elements and clac() in css 3?
23) ////////////Controlled Component
A controlled component is bound to a value, 
and its changes will be handled in code by using event-based callbacks. 
Here, the input form element is handled by the react itself rather than the DOM. 
In this, the mutable state is kept in the state property and will be updated only with setState() method.
Controlled components have functions that govern the data passing into them on every onChange event occurs. This data is then saved to state and updated with setState() method. It makes component have better control over the form elements and data.
///////////////////Uncontrolled Component
It is similar to the traditional HTML form inputs. 
Here, the form data is handled by the DOM itself. 
It maintains their own state and will be updated when the input value changes.
To write an uncontrolled component, there is no need to write an event handler for every state update,
 and you can use a ref to access the value of the form from the DOM.


 24) Things that will be disabled in production 
 1) React.strictMode -
 * by activating this , the errors and warnings are through in an effecient way
* also if we use this mode then , the parent most component renders twice for the initial rendering 
 2)profiler api - used to check the performace of the react components


 25) errorboundaries
  *when some part of ui is broken why to have whole part as broken ,we can throw
  fallback ui at the place where ui is exactly breaking.
  *Error boundary is not an inbuilt react compoent we need to create that
  * Error Boundary component can be created only with the class components by using componentDidCatch() lifecycle method

Note : Error boundaries do not catch errors for:
Event handlers (learn more)
Asynchronous code (e.g. setTimeout or requestAnimationFrame callbacks)
Server side rendering
Errors thrown in the error boundary itself (rather than its children)

26)forwardref - used to pass ref to its child components 
27)useImperativeHandle - 
*used to handle the  multiple refs 
* In simple if we wanna play with passing of  multiple refs to the children components
 than this comes into picture
 * this should be used with  forwardRef.

 28) syncronous and asynchronous
 *Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another.
  Tasks can run simultaneously. 
  *Synchronous is a blocking architecture,
  so the execution of each operation is dependent on the completion of the one before it.

  Note : JavaScript is a single-threaded, non-blocking, asynchronous,
   concurrent programming language with lots of flexibility.


   29) useLayoutEffect -
  *The signature is identical to useEffect, but it fires synchronously after all DOM mutations.
 Use this to read layout from the DOM and synchronously re-render. 
 Updates scheduled inside useLayoutEffect will be flushed synchronously, 
 before the browser has a chance to paint.
 * the lines written inside useLayoutEffect will get executed before the DOM tree gets updated
Prefer the standard useEffect when possible to avoid blocking visual updates.
*/

/////////////////////////////////////////////// max water storage problem
// function maxWater( height, n)
// {
//     let maximum = 0;

//     // Check all possible pairs of buildings
//     for (let i = 0; i < n - 1; i++) {
//         for (let j = i + 1; j < n; j++) {
//             let current = (Math.min(height[i],
//                                height[j])
//                            * (j - i));

//             // Maximum so far
//             maximum = Math.max(maximum, current);
//         }
//     }
//     return maximum;
// }
// console.log(maxWater([1,8,6,2,5,4,8,3,7],9))
////////////////////////////////////////////////////////// custom higher order functions
// Array.prototype.myCutomFilter=function(cb){
//   let filterData=[]
//   for(let i=0;i<this.length;i++){
//     if(cb(this[i])){
//       filterData.push(this[i])
//     }
//   }
//   return filterData
// }
// const arr=[1,2,2,3,4,5,6]
// const element = arr.myCutomFilter((ele)=>{
//   return ele>2
// })
// console.log(element)
//////////////////////////////////////////////// promises
// const myPromises=new Promise(function(resolve,reject){
// resolve("ok")
// reject("not ok")
// })

// myPromises.then((data)=>{
// console.log(data)
// }).catch((error)=>{
//  console.log(error)
// })
////////////////////////////////////////////////////// set
// const letters = new Set();
// letters.add({a:1,b:2,c:3})
// letters.add("b")
// letters.add("b")

// console.log(letters)
// console.log(letters.has("a"))
// console.log(letters.values());
// console.log(letters.entries("1"));
/////////////////////////////////////////////////// clean code first way
/*
1) function user(){
   const map=false
 if(map)return
 console.log("not true")
  console.log("not true1")
  if(map) return 
  console.log("not true2")
 }
 user()
2) if there are constant values which doesnt change write syntax as (RACING_POINT = 1)
3) use aspect-ratio property while using flex box if we dont want to change height or width of the box when 
there is a responsiveness
4) use gap properties instead of margin and padding (gap,row-gap,column-gap)

*/
/////////////////////////////////////////////////////css and html
/*
snippets(
  <a href="" download></a>
<p contenteditable= 'true'>jkvjkrvr</P>
)

<picture></picture> -> use to keep responsive multiple images
example :<picture>
  <source media="(min-width:650px)" srcset="img_pink_flowers.jpg">
  <source media="(min-width:465px)" srcset="img_white_flower.jpg">
  <img src="img_orange_flowers.jpg" alt="Flowers" style="width:auto;">
</picture>
*/

/////////////////////////////////////////////////////visual studio
/////////////////////////////////////////////////// prototype
// Array.prototype.myfilter=function(cb){
//   let newArr=[]
//   for(let i=0;i<this.length;i++){
//     if(cb(this[i])){
//       newArr.push(this[i])
//     }
//   }
//   return newArr
// }
// const arr=[1,2,3,4,5]
// const filteredArray= arr.myfilter((ele)=>{
//   return ele>2
// })
// console.log(filteredArray);
////////////////////////////////////////////////////// routing in different way
// let element = useRoutes([
//   {
//     path:'/',
//     element:<Home />,
//     children:[
//       {
//         index:true,
//         element:<Navigation/>
//       }
//     ]
//   },{
//     path:'/about',
//     element:<ABout />
//   }
// ])
//<Link to="/" replace reloadDocument></Link>
//<NavLink to="/"></NavLink>
// NavLink Acts similar to that of Link in react-router-dom but have few more additional properties like
// 1) style ={({isActive})=>{return  isActive ?{color:"red"}:{}}}
// 2)children
// 3) end
// note : try <Route  path ="/books/*" element={<Books/>}/> {how to access this in Books component}
//////////////////////////////////////////////////////// strong password

// function StrongPassword(value) {
//   return (
//     value.length >= 10 &&
//     /[A-Z]/.test(value) &&
//     /[a-z]/.test(value) &&
//     /[0-9]/.test(value)
//   );
// }
// console.log(StrongPassword("Naveen@12"));

/////////////////////////// chartAt
// const str="naveen"
// console.log(str.charAt(2))
///////////////////////////   password authentication
// const passwords =["naveen@123","dct@123","akbar@123"]
// let password="akbar123"
// function authentication (passArr,pass){
// if(passArr.includes(pass)){
//   return 'authenticated'
// }else{
//   return 'non authenticated'
// }
// return  passArr.includes(pass) ? 'authenticated' : 'non authenticated'
/////////////////////////////////////////////////
// for(let i=0;i<passArr.length;i++){
//   if(passArr[i]===pass){
//     return 'authenticated'
//   }else{
//     return 'non authenticated'
//   }
// }
////////////////////////////////////////////////
//   let isAuth = false
//  for(let i=0;i<passArr.length;i++){
//     if(passArr[i]===pass){
//      isAuth=true
//      break
//     }
//   }
// return isAuth
// }
// console.log(authentication(passwords,password))
///////////////////////////////////////////////////////// object traversing
// let arr = [
//   {
//     id: 1,
//     children: [
//       { id: 12, roll: 123 },
//       { id: 13, children: [{ id: 45 }, { id: 23 }] },
//     ],
//   },
//   { id: 78 },
//   {
//     id: 56,
//     children: [{ id: 98, children: [{ id: 47, children: [{ id: 5 }] }] },{id:7}],
//   },
//   {
//     id:87,children:[{id:25,children:[{id:16}]},{id:14}]
//   }
// ];
/////////////////////////////////////////////////////////
// function recursive(arr,targetId){
//   for (let i of arr){
//    if(i.id === targetId){
//     return i
//    }else{
//     if(i.children){
//       const result = recursive(i.children,targetId)
//       if(result){
//         return result
//       }
//     }
//    }
//   }
//  console.log("loop")
// }
// console.log(recursive(arr,47))


///////////////////////////////////////////////// 

