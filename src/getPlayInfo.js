import { Console } from "@woowacourse/mission-utils";

const getPlayInfo = async () => {
  const DUMMY_PARTICIPANTS = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n"
  );
  const PARTICIPANTS = DUMMY_PARTICIPANTS.split(",");

  const TRIALS = await Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");

  return [PARTICIPANTS, TRIALS];
};

export default getPlayInfo;
