import { Console } from "@woowacourse/mission-utils";

const InputCountView = () => {
  return Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요 (이름은 띄어쓰기 없이 쉼표(,) 기준으로 구분)"
  );
};

export default InputCountView;
