import { Console } from "@woowacourse/mission-utils";

const validateNameLength = (array, limitLength) => {
  array.map((el, index) => {
    if (el.length > limitLength)
      throw new Error(
        `[ERROR] 입력한 참가자의 이름이 ${limitLength}자를 초과했습니다.`,
      );
  });
};

export default validateNameLength;
