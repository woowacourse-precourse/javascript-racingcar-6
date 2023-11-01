import { MESSAGES, Validation } from "../Constants.js";
class CarName {
  createToRightObj(names) {
    let namesObj = {};
    names.forEach((name) => {
      Validation(name);
      namesObj[name] = 0;
    });
    return namesObj;
  }
}
export default CarName;
