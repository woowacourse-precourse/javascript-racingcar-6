import ValidatingTheValue from "../../src/view/ValidatingTheValue.js";
import testConstant from '../../t_constant/ViewConstant.js';
import DataProcess from "../../src/view/DataProcess.js";

describe("ValidatingTheValue checkCarNames", () => {
	DataProcess.divideCarName = jest.fn();
	test("checkCarNames은 Function type이다 ", () => {
		expect(typeof ValidatingTheValue.checkCarNames).toBe("function");
	})
	test('checkCarNames은 에러를 throw하지 않는다 ', () => {
		testConstant.CheckCarNameSuccess.forEach (({output}) => {
			DataProcess.divideCarName.mockReturnValueOnce(output);
			expect(() => ValidatingTheValue.checkCarNames(output)).not.toThrow();
		});
	});
	test('checkCarNames은 에러를 throw한다 ', () => {
		testConstant.CheckCarNameFail.forEach (({output}) => {
			DataProcess.divideCarName.mockReturnValueOnce(output);
			expect(() => ValidatingTheValue.checkCarNames(output)).toThrow();
		});
	});
});

describe("ValidatingTheValue checkRepeatCount", () => {
	test("checkRepeatCount은 Function type이다 ", () => {
		expect(typeof ValidatingTheValue.checkRepeatCount).toBe("function");
	})
	test('checkRepeatCount은 에러를 throw하지 않는다 ', () => {
		testConstant.CheckRepeatCountSuccess.forEach (({output}) => {
			expect(() => ValidatingTheValue.checkRepeatCount(output)).not.toThrow();
		});
	});
	test('checkRepeatCount은 에러를 throw한다 ', () => {
		testConstant.CheckRepeatCountFail.forEach (({output}) => {
			expect(() => ValidatingTheValue.checkRepeatCount(output)).toThrow();
		});
	});
});
