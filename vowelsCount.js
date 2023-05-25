/////////////////////////////////////////////////////// count of vowels 
const vowels =["a","e","i","o","u"]
const name = "the big black bug bit the big black beer"
let count =0 
for(let i=0;i<name.length;i++){
  if(vowels.includes(name[i])){
    count =count+1
  }
}
console.log(count)
/////////////
let a =0
a=a+1
a=a+1
console.log(a)