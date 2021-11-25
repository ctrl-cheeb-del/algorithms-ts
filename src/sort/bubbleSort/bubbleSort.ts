import swap from "../swap";

function bubbleSort<T>(array: T[]): T[] {
  array = array.slice();

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        swap(array, j, j + 1);
      }
    }
  }
  return array;
}

export default bubbleSort;
