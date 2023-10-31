import { MissionUtils } from "@woowacourse/mission-utils";

export const randomAndJudge = async (trynumber) => {
  const RANDOM_NUMBER_ARRAY = [];
  for (let i = 0; i < trynumber; i++) {
    const NUMBER = await MissionUtils.Random.pickNumber.InRange(0, 9);
    NUMBER >= 4 ? RANDOM_NUMBER_ARRAY.push(NUMER) : RANDOM_NUMBER_ARRAY.push(0);
  }
  return RANDOM_NUMBER_ARRAY;
};

export const makeRandomNumberTest = async (input) => {
  input >= 4 ? "Go" : "Stop";
};
