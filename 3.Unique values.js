function uniqueValues(arr) {
  let uniqueArr = [];

  for (let i = 0; i < arr.length; i++) {
    // Check if the current element is not already in the unique array
    if (uniqueArr.indexOf(arr[i]) === -1) {
      // If not found, push it to the unique array
      uniqueArr.push(arr[i]);
    }
  }

  // Return the array containing unique values
  return uniqueArr;
}

const arr = [1, 2, 3, 1, 2, 314];
console.log(uniqueValues(arr));
