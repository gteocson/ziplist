function zipList(arr1, arr2) {
  const newArr = [];
  let ind = 0;
  let ind2 = 0;
  let context = 'i';

  for (let i = 0; i < arr1.length + arr2.length; i++) {
    if (context === 'i') {
      newArr[i] = arr1[ind];
      ind++;
      context = 'j';
    } else {
      newArr[i] = arr2[ind2];
      ind2++;
      context = 'i';
    }
  }

  return newArr;
}

function zipListTheSimpleWay(arr1, arr2) {
  return _.flatten(_.zip(arr1, arr2));
}

const arr1 = ['a', 'b', 'c'];
const arr2 = [1, 2, 3];

console.log(zipList(arr1, arr2));
console.log(zipListTheSimpleWay(arr1, arr2));
