////////////////////////////////////////////////////////////////// includes method
const arr=["a","b","c"]
const str="naveen"
// output: ["a"] 
const newArr =[]
for (let i=0;i<arr.length;i++){
  if(str.includes(arr[i])){
newArr.push(arr[i])
  }
}
console.log(newArr)