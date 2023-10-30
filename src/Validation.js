export default class Validation {
    static carNameValidation(input) {
        try {
            this.checkLength(input);
        } catch(e) {
          throw(e)
        } return true;
    }

    static checkLength(input) {
        if(input.every((input) => input.length > 5 )) {
            throw new Error('[ERROR] 이름은 5자 이하만 가능합니다.')
        } return true;
    }
}