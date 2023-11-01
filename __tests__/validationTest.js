import { carNameCheck, tryNumCheck } from "../src/utils/validationCheck.js";

describe("차이름 입력값 테스트", () => {
	test("올바른 값 입력", () => {
		const input = [
			"car1,car2",
			"car1,car2,car3,car4",
			"1.1,3,4",
			"1,2,3,4,5,6",
		];
		input.forEach((v) => {
			const result = v.split(",");
			expect(() => carNameCheck(result)).not.toThrow();
		});
	});

	test("입력 받은 차의 갯수가 1개 이하", () => {
		const input = ["car1", "", "1", "[car]", "car1.car"];
		input.forEach((v) => {
			const result = v.split(",");
			expect(() => carNameCheck(result)).toThrow("[ERROR]");
		});
	});

	test("차 이름 길이가 5자 이상", () => {
		const input = ["123456,car", "car,1234567", "123456,123456", "1,2,123456"];
		input.forEach((v) => {
			const result = v.split(",");
			expect(() => carNameCheck(result)).toThrow("[ERROR]");
		});
	});

	test("차 이름을 입력하지 않았을 때(공백 포함)", () => {
		const input = ["car,", ",car", "car1,,car3", "car1, ,", "  ,car1"];
		input.forEach((v) => {
			const result = v.split(",");
			expect(() => carNameCheck(result)).toThrow("[ERROR]");
		});
	});
});

describe("시행 횟수 입력값 테스트", () => {
	test("입력 받은 시행 횟수의 형식이 잘 못 되었을때", () => {
		const input = ["-2", "0", "4.5", "-3.2", "c", "true", "", " "];
		input.forEach((v) => {
			expect(() => tryNumCheck(v)).toThrow("[ERROR]");
		});
	});
});
