import { verifyRandomNumber } from "../src/Verify/verifyRandomNumber";
import { verifyAttempt } from "../src/Verify/verifyAttempt";
import { verifyParticipants } from "../src/Verify/verifyParticipants";

// verifyAttempt
describe("verifyRandomNumber 입력 값 검증", () => {
  
  test("숫자가 아닌 값 입력", () => {
		expect(()=>verifyAttempt('a')).rejects.toThrow("[ERROR] 숫자를 입력해주세요.");
  });

	test("0보다 작은 값 입력", () => {
		expect(()=>verifyAttempt(-2)).rejects.toThrow("[ERROR] 0보다 큰 값을 입력해주세요.");
  });
});

// verifyRandomNumber
describe("verifyRandomNumber 값 검증", () => {
  
  test("숫자가 아닌 값 입력", () => {
		expect(()=>verifyRandomNumber('a')).rejects.toThrow("[ERROR] 숫자를 입력해주세요.");
  });

	test("입력 값 범위 검증 1, 0 미만", () => {
		expect(()=>verifyRandomNumber(-2)).rejects.toThrow("0~9사이 값을 입력해주세요.");
  });

	test("입력 값 범위 검증 2, 9 초과", () => {
		expect(()=>verifyRandomNumber(10)).rejects.toThrow("0~9사이 값을 입력해주세요.");
  });
});

// verifyParticipants
describe("verifyParticipants 입력 단일 값 검증", () => {
  
  test("이름에 공백에 대한 예외 처리 1", () => {
		expect(()=>verifyParticipants([' aedfef'])).rejects.toThrow("[ERROR] 이름에 공백이 있습니다.");
  });

	test("이름에 공백에 대한 예외 처리 2", () => {
		expect(()=>verifyParticipants([' asd '])).rejects.toThrow("[ERROR] 이름에 공백이 있습니다.");
  });

	test("이름에 길이 대한 예외 처리 2", () => {
		expect(()=>verifyParticipants(['aedfef'])).rejects.toThrow("[ERROR] 참가자 이름은 1~5글자로 작성해주세요.");
  });

	test("이름에 길이 대한 예외 처리 2", () => {
		expect(()=>verifyParticipants([''])).rejects.toThrow("[ERROR] 참가자 이름은 1~5글자로 작성해주세요.");
	});

	test("영어가 아닌 다른 문자에 대한 예외 처리 1", () => {
		expect(()=>verifyParticipants(["a#a"])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

	test("영어가 아닌 다른 문자에대한 예외 처리 2", () => {
		expect(()=>verifyParticipants(['a23'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });
	
	test("영어가 아닌 다른 문자에대한 예외 처리 3", () => {
		expect(()=>verifyParticipants(['a!d3'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

	test("영어가 아닌 다른 문자에대한 예외 처리 4", () => {
		expect(()=>verifyParticipants(['123'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

	test("영어가 아닌 다른 문자에대한 예외 처리 5", () => {
		expect(()=>verifyParticipants(['a승민z'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

});