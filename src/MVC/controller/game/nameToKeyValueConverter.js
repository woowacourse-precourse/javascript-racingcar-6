import SYMBOLS from "../../constants/symbols.js";

class NameToKeyValueConverter {
  converter(name) {
    const nameKeyValues = [];
    name.forEach((value) => {
      const keyValue = {};
      keyValue[value] = SYMBOLS.emptyString;
      nameKeyValues.push(keyValue);
    });
    return nameKeyValues;
  }
}
export default NameToKeyValueConverter;
