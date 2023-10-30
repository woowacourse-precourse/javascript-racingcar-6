import DataProcess from '../../src/controller/DataProcess'

describe("DataProcess divideCarName", () => {
	test("divideCarName은 Function type이다 ", () => {
		expect(typeof DataProcess.divideCarName).toBe("function");
	})
	test("String.prototype.split가 호출된다 ", () => {
		const originalSplit = String.prototype.split;
		String.prototype.split = jest.fn();
		DataProcess.divideCarName("");
		expect(String.prototype.split).toHaveBeenCalled();
		String.prototype.split = originalSplit;
	})
	const testCases = [
		{ input: "pobi,woni", expected: ["pobi", "woni"] },
		{ input: "alice,bob", expected: ["alice", "bob"] },
		{ input: "123", expected: ["123"] },
    	{ input: "", expected: [""] }
	];
	test('DataProcess.divideCarName은 값을 정상적으로 리턴한다 ', () => {
		testCases.forEach (({input, expected}) => {
			expect(DataProcess.divideCarName(input)).toStrictEqual(expected);
		});
	});
	test('DataProcess.divideCarName은 에러를 throw한다 ', () => {
		expect(() => DataProcess.divideCarName(undefined)).toThrow();
	});
});