import swap from "../swap";

function quickSort<T>(array: T[]) {
  if (array.length < 2) return array;

  return quickSortRecursive(array, 0, array.length - 1);
}

function quickSortRecursive<T>(array: T[], lPointer: number, rPointer: number) {
  if (lPointer < rPointer) {
    const partitionIndex = partition(array, lPointer, rPointer);
    quickSortRecursive(array, lPointer, partitionIndex - 1);
    quickSortRecursive(array, partitionIndex + 1, rPointer);
  }
  return array;
}

function partition<T>(array: T[], lPointer: number, rPointer: number) {
  const pivot = array[rPointer];

  let i = lPointer - 1;

  for (let j = lPointer; j < rPointer; j++) {
    if (array[j] < pivot) {
      i += 1;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, rPointer);

  return i + 1;
}

export default quickSort;