import { CHARACTER_LIMIT, NAME_INPUT_ERROR } from "./Constants.js";

const Validation = {

  isNull(nameList){
    if(nameList.length === 1 && nameList[0] === ''){
      throw new Error(NAME_INPUT_ERROR.null);
    }
  },


}
export default Validation;