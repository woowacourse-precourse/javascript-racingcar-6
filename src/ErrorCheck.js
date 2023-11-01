import {
    INPUT_NUMBER_ERR_MSG,
    PLAYER_NUMBER_ERR_MSG,
    MIN_PLAYER_NUMBER,
  } from './constant.js';

  class ErrorCheck {
    static numberCheck(input) {
      if (isNaN(input)) {
        throw new Error(INPUT_NUMBER_ERR_MSG);
      }
    }
  
    static playerNumberCheck(array) {
      if (array.length < MIN_PLAYER_NUMBER) {
        throw new Error(PLAYER_NUMBER_ERR_MSG);
      }
    }
  }
  
  export default ErrorCheck;