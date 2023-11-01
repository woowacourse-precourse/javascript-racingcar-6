import SYMBOLS from "../../constants/symbols.js";

const nameToKeyValueConverter = (name) => {
  const nameKeyValues = [];
  name.forEach((value) => {
    const keyValue = {};
    keyValue[value] = SYMBOLS.emptyString;
    nameKeyValues.push(keyValue);
  });
  return nameKeyValues;
};

export default nameToKeyValueConverter;
