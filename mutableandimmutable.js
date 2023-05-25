/*
Try this methods on both string and array
mutable 
1)push
2)pop
3)sort
4)shift
5)unshift
6)splice
7)replace()
immutable
1) toUpperCase()
2)toLowerCase()
3)reverse()
4)slice ()
5)indexOf() 
6)LastIndexOf()
7)concat()
8)join()
9)split()
*/
///////////////////////////////// concat (array method)
// const a=[1,2,3]
// const b=[4,5].concat(a)
// console.log(a,b);

///////////////////////////////// reverse  (array method)

// const a=[1,2,3]
// a.reverse()
// console.log(a);
////////////////////////////// split and join 

// const a ="12345" //opt "54321"
// const b=a.split("")
// console.log(b);
// console.log("a",a);
// b.reverse()
// console.log("reversed array",b);
// console.log(b.join(""));
//////////////////////////////////////////////// useCase 
// const arr=[]
// for(let i=1;i<=10;i++){
//     arr.push(i)
// }
// console.log(arr);
///////////////////////  simplify the above task
// const arr1=[]
// arr.push(0)
// arr.push(1)
// arr.push(2)
// arr.push(3)
// arr.push(4)
// arr.push(5)
// arr.push(6)
// arr.push(7)
// arr.push(8)
// arr.push(9)
// console.log(arr1);
//////////////////////////////////////
// const arr=[1,2,3]
// arr.push(5)
// console.log(arr);
///////////////////////////////////
// const arr ="abc"
// console.log(arr.toUpperCase()); 
// console.log(arr)
/////////////////////////////////
// const arr=[1,2,3]
// arr.pop()
// console.log(arr);
//console.log(arr.pop())
///////////////////////
// const str="wuhgefw"
// str.indexOf(5)
// console.log(str)

/////////////////////////////////////imp use case
// if(true){
//     console.log("true")
// }

// if(false){
//     console.log("false")
// }

//////////////////////////////////////////////////////// Advanced problems

/////////////////////////////////// useCase imp
// const arr=[1,2,3,0]
// arr.pop() // 0
// //[1,2,3]
// if(arr.pop())// value is 3 and arr=[1,2]
// {
//     console.log(arr.pop()); // 2
// }
// console.log(arr); // [1]
////////////////////////////////////// try the above thing same with push method  
// const arr=[1,2,3,4]
// console.log(arr.push(6))  // its giving us length of the array // 5
// //arr=[1,2,3,4,6]
// if(arr.push(7)){  // value = 7 and arr=[1,2,3,4,6,7]
//     console.log(arr.push(8)) // value=8 arr=[1,2,3,4,6,7,8]
// }
// console.log(arr); [1,2,3,4,6,7,8]
//////////////////////////////////////////////  slice 
// const a = "naveen" 
// console.log(a.slice(0,a.length)) // nav
// console.log(a.slice(-4,-2))// ve
// console.log(a.slice(-2,-4)) // // "" or []
// console.log(a)
//////////////////////////////////////////// splice 
// const a = ["1","2","3"]
// console.log(a.splice(3,1))
//////////////////////////////////////
// const a=["1","2","3"]
// a.splice(1,0,4)
// console.log(a)
/////////////////////////////////////////
