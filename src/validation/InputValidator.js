import { isIncludeSpace, isNumber } from "../utils/ValidationUtils.js";

export const InputValidator = {
  isValidCarName(carName){
    // 이름에 없는 경우 ex) ,,tom,elice
    if (carName === '') return false;
    
    // 이름이 6글자 이상인 경우
    if (carName.length >= 6) return false;
    
    // 이름에 공백이 있는 경우
    if (isIncludeSpace(carName)) return false;
    return true;
  },
  isValidPlayCountInput(playCount){ 
    // 입력에 공백이 있는 경우
    if (playCount === '') return false;
    // 숫자가 아닌 경우
    if (!isNumber(playCount)) return false;
    
    // 1이상의 수가 아닌 경우
    if (Number(playCount) < 1) return false;
    
    return true;
  }
}
