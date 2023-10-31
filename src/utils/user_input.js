import { Console } from '@woowacourse/mission-utils';

async function userInput(question) {
  const ANSWER = await Console.readLineAsync(question);
  return ANSWER;
}

export default userInput;
