"use strict";

import Strings from "../resources/Strings";

const DATA_TYPE_REGEX = /^[1-9]+$/;

export default class RepetitionNumber {
    /** @type {string} */
    _value = null;

    /**
     * 객체 생성 시, 입력받은 문자열의 유효성 검사를 수행하고 멤버변수로 저장한다.
     * @param {string} value
     */
    constructor(value) {
        this._validate(value);
        this._value = value;
    }

    /**
     * 정답 형식에 대한 유효성 검사를 수행한다.
     * @param {string} value 입력받은 문자열
     */
    _validate(value) {
        this._checkDataType(value);
    }

    /**
     * 정답 형식에 대한 타입 검사를 수행한다.
     * @param {string} value 입력받은 문자열
     */
    _checkDataType(value) {
        if (!DATA_TYPE_REGEX.test(value)) {
            throw new Error(Strings.ERROR_INPUT_DATA_TYPE);
        }
    }
}
