const data = {
  lists: [
    ["first", [15, 11, 13, 7, 5]],
    ["second", [2, 6, 8, 4, 14, 12, 10]],
    ["third", [9, 3, 1]],
  ],
};


// Only edit below

const [, first] = data.lists[0]
const [, second] = data.lists[1]
const [, third] = data.lists[2]  

const result = [] ;

const extractBiggest = () => {
  const big1 = first.length > 0 ? first[first.length-1] : -Infinity;
  const big2 = second.length > 0 ? second[second.length-1] : -Infinity;
  const big3 = third.length > 0 ? third[third.length-1] : -Infinity;
  let arr = [big1,big2,big3];
  let number = Math.max(...arr);
  if (number === big1) {
    first.pop();
  } else if (number === big2) {
    second.pop();
  } else if (number === big3) {
    third.pop(); 
  }
  return number;
};

// Only edit above

result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 

result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 

result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 
result.push(extractBiggest()); 

console.log(result);
