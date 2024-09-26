const arr = [1,2,3,4];

arr.forEach((item)=>{
    console.log(item);
});


const newArr= arr.map((it, idx)=>{
    it = it+1; // some calculation
    return it;
});
console.log(newArr);
const newArr1= arr.map((it, idx)=>(it+1));
console.log(newArr1);


const newArr2 = arr.filter((item)=>{
   return item%2===0;
})
console.log(newArr2)

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15

const nestedArray = [[1, 2], [3, 4], [5]];

const flatArray = nestedArray.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue);
}, []);

console.log(flatArray); // Output: [1, 2, 3, 4, 5]

