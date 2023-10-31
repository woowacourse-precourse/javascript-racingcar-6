export default class Validation {
    static carNameValidation(input) {
        try {
            this.checkLength(input);
            this.checkBlank(input);
            this.checkDuplicatione(input);
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

    static checkDuplicatione(input) {
        const set = new Set(input)
        if(set.size !== input.length) {
            throw new Error('[ERROR] 중복된 값이 있습니다.')
        } return true;
    }

    static checkNumber(input) {
        if (isNaN(Number(input))) {
            throw new Error('[ERROR] 숫자만 입력 가능합니다.')
        } return true;
    }
}