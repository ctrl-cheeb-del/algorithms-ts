import swap from "../swap";

function insertionSort<T>(array: T[]): T[] {
  for (let i = 1; i < array.length; i++) {
    const item = array[i];
    let index = i;

    while (index > 0) {
      const lower = index - 1;
      const upper = index;

      if (array[lower] > item) {
        swap(array, lower, upper);
      } else {
        index = upper;
        break;
      }
      index -= 1;
    }
    array[index] = item;
  }
  return array;
}

export default insertionSort;
