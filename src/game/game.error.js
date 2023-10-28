const validations = {
  validLength(item, min, max) {
    return item.length >= min && item.length <= max;
  },

  validDuplication(array) {
    return array.every((item, index) => array.lastIndexOf(item) === index);
  },
};
export default validations;
