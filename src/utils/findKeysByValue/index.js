const findKeysByValue = (object, targetValue) => {
  const foundKeys = [];
  Object.keys(object).forEach((key) => {
    if (object[key] === targetValue) {
      foundKeys.push(key);
    }
  });
  return foundKeys;
};

export default findKeysByValue;
