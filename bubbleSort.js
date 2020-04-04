function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function bubbleSort(arr) {
  let len = arr.length, i, j, stop;
  for (i = 0; i < len - 1; i++) {
    for (j = 0, stop = len - i; j < stop; j++) {
      if (arr[j] > arr[j+1]) {
        swap(arr, j, j+1);
      }
    }
  }
  return arr;
}

console.log(bubbleSort([9,8,7,6,5,4,-1,-2,-3]));

//[ -3, -2, -1, 4, 5, 6, 7, 8, 9 ]
