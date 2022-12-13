function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const output = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === output) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  fuction with two arguments
  return true if any pair of numbers in an array adds up to the target number
*/
/* 
create an object that will record the numbers and iterate.
if the sum of the current number and any of the identified number in the record is equal to the target, return true once t done with the iteration. else return false
*/
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([3, 9, 0, 89, 11, 6], 120));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([25, 1, 4, 9, 1], 2));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
