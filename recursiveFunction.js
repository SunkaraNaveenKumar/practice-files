/////////////////////////////////////////////////////// object traversing
let arr = [
  {
    id: 1,
    children: [
      { id: 12, roll: 123 },
      { id: 13, children: [{ id: 45 }, { id: 23 }] },
    ],
  },
  { id: 78 },
  {
    id: 56,
    children: [{ id: 98, children: [{ id: 47, children: [{ id: 5 }] }] },{id:7}],
  },
  {
    id:87,children:[{id:25,children:[{id:16}]},{id:14}]
  }
];
///////////////////////////////////////////////////////
function recursive(arr,targetId){
  for (let i of arr){
   if(i.id === targetId){
    return i
   }else{
    if(i.children){
      const result = recursive(i.children,targetId)
      if(result){
        return result
      }
    }
   }
  }
 console.log("loop")
}
console.log(recursive(arr,47))