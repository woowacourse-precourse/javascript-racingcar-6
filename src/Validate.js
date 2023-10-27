import { Console } from '@woowacourse/mission-utils'
import { ERROR_MESSAGE } from './Message.js';

class Validate{

  async validateName(name){
    const NAME = name.split(',').map((name) => { return name.trim();})

    NAME.map((name) => {
      if(name.length > 5){
        throw ERROR_MESSAGE.NAME_LONGER_THAN_FIVE
      }

      if(name === ''){
        throw ERROR_MESSAGE.NAME_BLANK
      }

      this.#checkNameTypeError(name);
    })

    return NAME;
  }

  #checkNameTypeError(name){
    const NAME = name.split('')
    NAME.forEach((letter) => {
      if(letter === ' '){
        throw ERROR_MESSAGE.NAME_BLANK
      }

      const REG_EXP = /[0-9a-zA-Z가-힣]/
      if(letter.search(REG_EXP)){
        throw ERROR_MESSAGE.NAME_WRONG_TYPE
      }
    })
  }

}

export default Validate