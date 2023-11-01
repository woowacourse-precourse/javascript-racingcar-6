import { Console } from "@woowacourse/mission-utils";

const VALID_CAR_NAME_LENGTH = 5;

function isValidCarName(string) {
  // 이름의 길이가 올바른지 체크하기
  if (string.length === 0) return false;
  if (string.length > VALID_CAR_NAME_LENGTH) return false;

  return true;
}

function isValidCarNames(names) {
  // 각각이 올바른 이름이 맞는지 체크하기
  const validNameList = names.filter((name) => isValidCarName(name));
  if (names.length != validNameList.length) return false;

  return true;
}

export async function getCarName() {
  const rawInput = await Console.readLineAsync(
    "경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)"
  );

  const names = rawInput.split(",");
  if (!isValidCarNames(names)) {
    // console.log("[names]", names.join("/"));
    throw Error("[ERROR] 이름이 올바른 형식이 아닙니다!");
  }

  return names;
}

function isValidMoveNumber(number) {
  if (!Number.isInteger(number)) return false;

  if (number === 0) return false;

  return true;
}

export async function getMoveNumber() {
  const rawInput = await Console.readLineAsync("시도할 횟수는 몇 회인가요?");

  const number = Number(rawInput);
  if (!isValidMoveNumber(number)) {
    // console.log("[rawInput]", rawInput);
    throw Error("[ERROR] 시도 횟수가 올바른 형식이 아닙니다!");
  }

  return number;
}
