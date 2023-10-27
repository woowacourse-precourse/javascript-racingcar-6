import { Cars } from "./Cars.js";

export class Verification {
  exceedLength(array) {
    const filteredArray = array.filter((name) => name.length > 5);
    return filteredArray.length > 0 ? true : false;
  }

  findDuplicates(array) {
    const set = new Set(array);
    return set.size < array.length ? true : false;
  }
}
