import { Console } from '@woowacourse/mission-utils'
import { ERROR_MESSAGE } from './Message.js';

class Validate{

  async validateName(name){
    const NAME = name.split(',').map((name) => { return name.trim();})

    NAME.map((name) => {
      if(name.length > 5){
        throw new Error (ERROR_MESSAGE.NAME_LONGER_THAN_FIVE)
      }

      if(name === ''){
        throw new Error (ERROR_MESSAGE.NAME_BLANK)
      }

      this.#checkNameType(name);
    })

    return NAME;
  }

  #checkNameType(name){
    const NAME = name.split('')
    NAME.forEach((letter) => {
      if(letter === ' '){
        throw new Error (ERROR_MESSAGE.NAME_BLANK)
      }

      const REG_EXP = /[0-9a-zA-Z가-힣]/
      if(letter.search(REG_EXP)){
        throw new Error (ERROR_MESSAGE.NAME_WRONG_TYPE)
      }
    })
  }

  async validateNumber(num){
    const NUMBER = Number(num)

    if(isNaN(num) || num === ''){
      throw new Error (ERROR_MESSAGE.REPEAT_WRONG_TYPE)
    }

    if(NUMBER % 1 !== 0 || NUMBER < 1){
      throw new Error (ERROR_MESSAGE.REPEAT_NOT_NATURAL)
    }

    return NUMBER
  }

}

export default Validate