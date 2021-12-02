function mergeSort<T>(array: T[]): T[] {
  if (!array.length) return array;

  return mergeSortRecursive(array, 0, array.length - 1);
}

function mergeSortRecursive<T>(
  array: T[],
  firstPointer: number,
  secondPointer: number
): T[] {
  if (firstPointer == secondPointer) return [array[firstPointer]];

  const middle = ~~((firstPointer + secondPointer) / 2);

  const firstbit = mergeSortRecursive(array, firstPointer, middle);
  const secondbit = mergeSortRecursive(array, middle + 1, secondPointer);

  array = [];

  while (firstbit.length > 0 && secondbit.length > 0) {
    if (firstbit[0] > secondbit[0]) array.push(secondbit.shift()!);
    else array.push(firstbit.shift()!);
  }

  array.push(...firstbit, ...secondbit);

  return array;
}

export default mergeSort;
