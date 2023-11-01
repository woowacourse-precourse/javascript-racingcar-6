import { Console } from '@woowacourse/mission-utils';

export const handleOutputRound = (result) => {
  const JOIN_RESULT = result.join('\n');
  Console.print(JOIN_RESULT);
};

export const handleOutputGame = (result) => {
  let PARSE_RESULT = `최종우승자 : ${result}`;
  if (result.length > 1) {
    PARSE_RESULT = result.join(', ');
  }
  Console.print(PARSE_RESULT);
};

export const parseCarResult = (key, value) => {
  const HYPHEN = ''.concat('-'.repeat(value));
  return `${key} : ${HYPHEN}`;
};
