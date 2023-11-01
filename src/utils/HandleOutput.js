import { Console } from '@woowacourse/mission-utils';

export const handleOutputRound = (result) => {
  const JOIN_RESULT = result.join('\n');
  Console.print(JOIN_RESULT);
};

export const parseCarResult = (key, value) => {
  const HYPHEN = ''.concat('-'.repeat(value));
  return `${key} : ${HYPHEN}`;
};
