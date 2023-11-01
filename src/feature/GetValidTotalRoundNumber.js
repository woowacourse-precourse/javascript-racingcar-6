import { Console } from "@woowacourse/mission-utils";

export const checkNumberValidity = (str) => {
  const condition = /^[0-9]+$/.test(str);
  return !!condition;
};

const getValidTotalRoundNumber = async () => {
  const totalRoundNumber = await Console.readLineAsync(
    "시도할 횟수는 몇 회인가요?"
  );

  const isNumberValid = checkNumberValidity(totalRoundNumber);
  if (!isNumberValid) {
    throw new Error("[Error]");
  }

  return parseInt(totalRoundNumber, 10);
};
export default getValidTotalRoundNumber;
