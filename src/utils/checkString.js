const checkString = {
  checkListValueHasSpace(list) {
    return list.filter((value) => value.match(/\s/g)).length > 0;
  },

  checkListSameValue(list) {
    return Array.from(new Set(list.map((car) => car))).length !== list.length;
  },

  checkListItemLongerThan(list, maxLength) {
    return list.filter((value) => value.length > maxLength).length > 0;
  },

  checkListHasVoid(list) {
    return list.filter((value) => value === '').length > 0;
  },
  checkListLengthLongerThan(list, minLength) {
    return list.length > minLength;
  },
};

export default checkString;
