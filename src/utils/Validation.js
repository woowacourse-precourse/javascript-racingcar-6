import { CHARACTER_LIMIT, NAME_INPUT_ERROR } from "./Constants.js";

const Validation = {

  isNull(nameList){
    if(nameList.length === 1 && nameList[0] === ''){
      throw new Error(NAME_INPUT_ERROR.null);
    }
  },

  isEmpty(nameList){
    nameList.forEach(name => {
      if(name.length === 0){
        throw new Error(NAME_INPUT_ERROR.empty);
      }
    })
  },

  isLong(nameList){
    nameList.forEach(name => {
      if(name.length > CHARACTER_LIMIT){
        throw new Error(NAME_INPUT_ERROR.long);
      }
    })
  },

}
export default Validation;