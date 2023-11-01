import ValidatingTheValueUtils from '../../src/view/ValidatingTheValueUtils.js';

describe("ValidatingTheValueUtils checkStrSizeOverFive", () => {
	test("checkStrSizeOverFive은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkStrSizeOverFive).toBe("function");
	})
	test('checkStrSizeOverFive은 값을 정상적으로 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkStrSizeOverFive(1)).toBeFalsy();
		expect(ValidatingTheValueUtils.checkStrSizeOverFive(6)).toBeTruthy();
		expect(ValidatingTheValueUtils.checkStrSizeOverFive(undefined)).toBeFalsy();
		expect(ValidatingTheValueUtils.checkStrSizeOverFive(null)).toBeFalsy();
		expect(ValidatingTheValueUtils.checkStrSizeOverFive('abc')).toBeFalsy();
	})
});

describe("ValidatingTheValueUtils checkStrSizeIsZero", () => {
	test("checkStrSizeIsZero은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkStrSizeOverFive).toBe("function");
	})
	test('checkStrSizeIsZero은 값을 정상적으로 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkStrSizeIsZero(0)).toBeTruthy();
		expect(ValidatingTheValueUtils.checkStrSizeIsZero(1)).toBeFalsy();
	})
});

describe("ValidatingTheValueUtils checkIsCanNotPrint", () => {
	test("checkIsCanNotPrint은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkIsCanNotPrint).toBe("function");
	})
	test('checkIsCanNotPrint은 값을 false 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkIsCanNotPrint("123")).toBeFalsy();
		expect(ValidatingTheValueUtils.checkIsCanNotPrint("abc")).toBeFalsy();
		expect(ValidatingTheValueUtils.checkIsCanNotPrint("성락")).toBeFalsy();
		expect(ValidatingTheValueUtils.checkIsCanNotPrint("")).toBeFalsy();
	})
	test('checkIsCanNotPrint은 값을 true 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkIsCanNotPrint("  ")).toBeTruthy();
		expect(ValidatingTheValueUtils.checkIsCanNotPrint(" ab")).toBeTruthy();
		expect(ValidatingTheValueUtils.checkIsCanNotPrint("$$")).toBeTruthy();
	})
});

describe("ValidatingTheValueUtils checkIsNotNumber", () => {
	test("checkIsNotNumber은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkIsNotNumber).toBe("function");
	})
	test('checkIsNotNumber 값을 false 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkIsNotNumber("123")).toBeFalsy();
		expect(ValidatingTheValueUtils.checkIsNotNumber("-123")).toBeFalsy();
        expect(ValidatingTheValueUtils.checkIsNotNumber("")).toBeFalsy();
	})
    test('checkIsNotNumber 값을 true 리턴한다 ', () => {
        expect(ValidatingTheValueUtils.checkIsNotNumber("abc")).toBeTruthy();
		expect(ValidatingTheValueUtils.checkIsNotNumber("1.2")).toBeTruthy();
	})
    test('checkIsNotNumber Error 리턴한다 ', () => {
		expect(() => ValidatingTheValueUtils.checkIsNotNumber(null)).toThrow();
    });
});

describe("ValidatingTheValueUtils checkNegativeOrZeroNum", () => {
	test("checkNegativeOrZeroNum은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkNegativeOrZeroNum).toBe("function");
	})
	test('checkNegativeOrZeroNum 값을 false 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkNegativeOrZeroNum(123)).toBeFalsy();
        expect(ValidatingTheValueUtils.checkNegativeOrZeroNum("1.2")).toBeFalsy();
	})
    test('checkNegativeOrZeroNum 값을 true 리턴한다 ', () => {
        expect(ValidatingTheValueUtils.checkNegativeOrZeroNum(null)).toBeTruthy();
        expect(ValidatingTheValueUtils.checkNegativeOrZeroNum(-123)).toBeTruthy();
	})
});

describe("ValidatingTheValueUtils checkTooLargeNum", () => {
	test("checkTooLargeNum은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkTooLargeNum).toBe("function");
	})
	test('checkTooLargeNum 값을 false 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkTooLargeNum(999)).toBeFalsy();
	})
    test('checkTooLargeNum 값을 true 리턴한다 ', () => {
        expect(ValidatingTheValueUtils.checkTooLargeNum(1001)).toBeTruthy();
	})
});

describe("ValidatingTheValueUtils checkSameNameInCarList", () => {
	test("checkSameNameInCarList은 Function type이다 ", () => {
		expect(typeof ValidatingTheValueUtils.checkSameNameInCarList).toBe("function");
	})
	test('checkSameNameInCarList 값을 false 리턴한다 ', () => {
		expect(ValidatingTheValueUtils.checkSameNameInCarList([123, 456])).toBeFalsy();
		expect(ValidatingTheValueUtils.checkSameNameInCarList([])).toBeFalsy();
	})
    test('checkSameNameInCarList 값을 true 리턴한다 ', () => {
        expect(ValidatingTheValueUtils.checkSameNameInCarList([123, 123])).toBeTruthy();
	})
    test('checkSameNameInCarList Error 리턴한다 ', () => {
		expect(() => ValidatingTheValueUtils.checkSameNameInCarList(null)).toThrow();
		expect(() => ValidatingTheValueUtils.checkSameNameInCarList(123)).toThrow();
		expect(() => ValidatingTheValueUtils.checkSameNameInCarList(undefined)).toThrow();
    });
});