const data = {
    lists: [
      ["first", [15, 11, 13, 7, 5]],
      ["second", [2, 6, 8, 4, 14, 12, 10]],
      ["third", [9, 3, 1]],
    ],
  };
  
  // Should log out the following: [10, 12, 14, 5, 7, 13, 11, 15, 4, 8, 6, 2, 1, 3, 9]
  // 10,12,14 ('second')
  // 5,7,13,11,15 ('first')
  // 4,8,6,2 ('second')
  // 1,3,9 ('third')
  
  // Only edit below
  let count = 1;
  
  const [, first] = data.lists[0];
  const [, second] = data.lists[1];
  const [, third] = data.lists[2];
  
  const result = [];
  
  const extractBiggest = () => {
    if (count <= 3 || (count > 8 && count <= 12)) {
      let number = second.pop();
      count++;
      return number;
    } else if (count <= 8) {
      let number = first.pop();
      count++;
      return number;
    } else {
      let number = third.pop();
      return number;
    }
  };
  
  // Only edit above
  
  result.push(extractBiggest()); // Second
  result.push(extractBiggest()); // Second
  result.push(extractBiggest()); // Second
  result.push(extractBiggest()); // First
  result.push(extractBiggest()); // First
  
  result.push(extractBiggest()); // First
  result.push(extractBiggest()); // First
  result.push(extractBiggest()); // First
  result.push(extractBiggest()); // Second
  result.push(extractBiggest()); // Second
  
  result.push(extractBiggest()); // Second
  result.push(extractBiggest()); // Second
  result.push(extractBiggest()); // Third
  result.push(extractBiggest()); // Third
  result.push(extractBiggest()); // Third
  
  console.log(result);