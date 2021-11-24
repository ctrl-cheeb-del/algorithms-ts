import { NO_MATCH } from "../common";

const linearSearch = (
  items: string[] | number[],
  item: string | number
): number => {
  for (let i = 0; i < items.length; i++) {
    if (items[i] == item) {
      return i;
    }
  }
  return NO_MATCH;
};

export default linearSearch;
