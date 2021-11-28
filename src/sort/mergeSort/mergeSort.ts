function mergeSort<T>(array: T[]): T[] {
  if (!array.length) return array;

  return mergeSortRecursive(array, 0, array.length - 1);
}

function mergeSortRecursive<T>(
  array: T[],
  lPointer: number,
  rPointer: number
): T[] {
  if (lPointer == rPointer) return [array[lPointer]];

  const middle = ~~((lPointer + rPointer) / 2);

  const firstHalf = mergeSortRecursive(array, lPointer, middlqe);
  const secondHalf = mergeSortRecursive(array, middle + 1, rPointer);

  array = [];

  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] > secondHalf[0]) array.push(secondHalf.shift()!);
    else array.push(firstHalf.shift()!);
  }

  array.push(...firstHalf, ...secondHalf);

  return array;
}

export default mergeSort;
