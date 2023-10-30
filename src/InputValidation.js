class InputValidation {
    #number;
    #names;

    constructor(names, number) {
        this.validate(names, number);
        this.#names = names;
        this.#number = number;
    }

    validate(names, number) {
        this.validateNames(names);
        this.validateNumber(number);
    }

    validateNames(names) {
        if (names.length < 2) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
        if (names.forEach((v) => v.length > 5)) throw new Error('[ERROR] 자동차 이름이 잘못된 형식입니다.');
    }

    validateNumber(number) {
        if (isNaN(number)) console.log('[ERROR] 숫자가 잘못된 형식입니다.');
    }

    getNames() {
        return this.#names;
    }

    getNumber() {
        return this.#number;
    }
}