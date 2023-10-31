import { MESSAGES } from "../Constants.js";
class CarName {
  createToRightObj(names) {
    let namesObj = {};
    names.forEach((name) => {
      if (name.length > 5) throw new Error(MESSAGES.ERROR_WRONG_NAME);
      namesObj[name] = 0;
    });
    return namesObj;
  }
}
export default CarName;
