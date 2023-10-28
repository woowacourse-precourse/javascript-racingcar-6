const validations = {
  validLength(item, min, max) {
    return item.length >= min && item.length <= max;
  },
};
export default validations;
