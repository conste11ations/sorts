function mergeSort (unsortedArray) {
// if array has 1 element, return it
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  const middle = Math.floor(unsortedArray.length / 2);

  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);
  console.log(`leftArray: ${left} rightArray: ${right}`);

  return merge(
    mergeSort(left), mergeSort(right)
  );
}

function merge (left, right) {
  let result = [], leftIndex = 0, rightIndex = 0;
  console.log("stats: left an right lengths: ",left.length, right.length);
  // We will concatenate values into the resultArray in order
  while (leftIndex < left.length && rightIndex < right.length) {
    console.log(`merge-leftArray: ${left} merge-rightArray: ${right}`);
    console.log(`left-leftIndex: ${leftIndex} right-rightIndex: ${rightIndex}`);
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      console.log("left-RESULT: ", result);
      leftIndex++; // move left array cursor
    } else {
      result.push(right[rightIndex]);
      console.log("right-RESULT: ", result);
			rightIndex++; // move right array cursor
    }
  }

  // join into 1 array
  return result
          .concat(left.slice(leftIndex))
          .concat(right.slice(rightIndex));
}
console.log("test");
console.log(mergeSort([9,8,7,6,5,0,-1,-3,-5]));

//[ -5, -3, -1, 0, 5, 6, 7, 8, 9 ]
