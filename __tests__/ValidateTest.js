import { checkRandomNumber, checkAttempt, checkParticipants } from "../src/Validates";

// checkAttempt
describe("checkRandomNumber 입력 값 검증", () => {
  
  test("숫자가 아닌 값 입력", () => {
		expect(()=>checkAttempt('a')).rejects.toThrow("[ERROR] 숫자를 입력해주세요.");
  });

	test("0보다 작은 값 입력", () => {
		expect(()=>checkAttempt(-2)).rejects.toThrow("[ERROR] 0보다 큰 값을 입력해주세요.");
  });
});

// checkRandomNumber
describe("checkRandomNumber 값 검증", () => {
  
  test("숫자가 아닌 값 입력", () => {
		expect(()=>checkRandomNumber('a')).rejects.toThrow("[ERROR] 숫자를 입력해주세요.");
  });

	test("입력 값 범위 검증 1, 0 미만", () => {
		expect(()=>checkRandomNumber(-2)).rejects.toThrow("0~9사이 값을 입력해주세요.");
  });

	test("입력 값 범위 검증 2, 9 초과", () => {
		expect(()=>checkRandomNumber(10)).rejects.toThrow("0~9사이 값을 입력해주세요.");
  });
});

// checkParticipants
describe("checkParticipants 입력 단일 값 검증", () => {
  
  test("이름에 공백에 대한 예외 처리 1", () => {
		expect(()=>checkParticipants([' aedfef'])).rejects.toThrow("[ERROR] 이름에 공백이 있습니다.");
  });

	test("이름에 공백에 대한 예외 처리 2", () => {
		expect(()=>checkParticipants([' asd '])).rejects.toThrow("[ERROR] 이름에 공백이 있습니다.");
  });

	test("이름에 길이 대한 예외 처리 2", () => {
		expect(()=>checkParticipants(['aedfef'])).rejects.toThrow("[ERROR] 참가자 이름은 1~5글자로 작성해주세요.");
  });

	test("이름에 길이 대한 예외 처리 2", () => {
		expect(()=>checkParticipants([''])).rejects.toThrow("[ERROR] 참가자 이름은 1~5글자로 작성해주세요.");
	});

	test("영어가 아닌 다른 문자에 대한 예외 처리 1", () => {
		expect(()=>checkParticipants(["a#a"])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

	test("영어가 아닌 다른 문자에대한 예외 처리 2", () => {
		expect(()=>checkParticipants(['a23'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });
	
	test("영어가 아닌 다른 문자에대한 예외 처리 3", () => {
		expect(()=>checkParticipants(['a!d3'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

	test("영어가 아닌 다른 문자에대한 예외 처리 4", () => {
		expect(()=>checkParticipants(['123'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

	test("영어가 아닌 다른 문자에대한 예외 처리 5", () => {
		expect(()=>checkParticipants(['a승민z'])).rejects.toThrow("[ERROR] 참가자 이름이 영어가 아닙니다.");
  });

});