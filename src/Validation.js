export default class Validation {
    static carNameValidation(input) {
        try {
            this.checkLength(input);
            this.checkBlank(input);
        } catch(e) {
          throw(e)
        } return true;
    }

    static checkLength(input) {
        if(input.some((input) => input.length > 5 )) {
            throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.')
        } return true;
    }

    static checkBlank(input) {
        if(input.some((input) => input === "" )) {
            throw new Error('[ERROR] 이름을 입력해주세요.')
        } return true;
    }
}