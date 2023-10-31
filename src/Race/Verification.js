export default class Verification {
  static exceedLength(array) {
    const filteredArray = array.filter((name) => name.length > 5);
    return filteredArray.length > 0 ? true : false;
  }

  static findDuplicates(array) {
    const set = new Set(array);
    return set.size < array.length ? true : false;
  }
}
