import { Console } from "@woowacourse/mission-utils";

class InputValidator {
  async getValidMemberName(prompt) {
    const members = await Console.readLineAsync(prompt);

    const racingCarMembers = members.split(",");
    const reg = /[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/ ]/;
    let isAcceptString = true;
    let isProperLength = true;

    racingCarMembers.forEach((member) => {
      if (reg.test(member)) {
        isAcceptString = false;
      }
    });
    racingCarMembers.forEach((member) => {
      if (member.length > 5) {
        isProperLength = false;
      }
    });

    if (members == "") {
      throw new Error("[ERROR] 경주할 자동차 이름을 1개 이상 입력해주세요.");
    } else if (!isAcceptString || racingCarMembers.includes("")) {
      throw new Error("[ERROR] 공백, 빈 문자, 괄호, 따옴표, 특수문자는 포함할 수 없습니다.");
    } else if (!isProperLength) {
      throw new Error("[ERROR] 이름은 5자 이하로 입력 가능합니다.");
    } else if (racingCarMembers.length > 10) {
      throw new Error("[ERROR] 이름은 총 10개까지 입력 가능합니다.");
    } else if (new Set(racingCarMembers).size !== racingCarMembers.length) {
      throw new Error("[ERROR] 중복된 이름은 입력할 수 없습니다.");
    }
    return racingCarMembers;
  }

  async getValidROUNDNUMBER(prompt) {
    const ROUNDNUMBER = Number(await Console.readLineAsync(prompt));

    if (ROUNDNUMBER == "") {
      throw new Error("[ERROR] 시도 횟수를 입력해주세요.");
    } else if (!Number.isInteger(ROUNDNUMBER)) {
      throw new Error("[ERROR] 시도 횟수는 자연수여야 합니다.");
    } else if (ROUNDNUMBER < 1 || ROUNDNUMBER > 20) {
      throw new Error("[ERROR] 시도 횟수는 1 이상 20 미만이어야 합니다.");
    }
    return ROUNDNUMBER;
  }
}

export default InputValidator;
