import { NO_MATCH } from "../common";

const binarySearch = (
  items: string[] | number[],
  item: string | number
): number => {
  let result = null;

  let startPoint: number = 0;
  let endPoint: number = items.length - 1;

  while (result == null) {
    const midPoint: number = ~~((startPoint + endPoint) / 2);
    const att = items[midPoint];

    if (item === att) {
      result = midPoint;
    } else if (startPoint == endPoint) {
      result = NO_MATCH;
    } else if (item < att) {
      if (midPoint == 0) result = NO_MATCH;
      endPoint = midPoint - 1;
    } else if (item > att) {
      if (midPoint == items.length - 1) result = NO_MATCH;
      startPoint = midPoint + 1;
    }
  }

  return result;
};

export default binarySearch;
