/*
  find out unique from 2 array
*/

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [2, 3, 4, 5, 6];

const unique = (arr1, arr2) => {
  const arr3 = [...arr1, ...arr2];

  return arr3.filter((el, index) => arr3.indexOf(el) === index);
};

console.log(unique(arr1, arr2));
