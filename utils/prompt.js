import { Console } from '@woowacourse/mission-utils';

async function prompt(message) {
  const answer = await Console.readLineAsync(message);
  return answer;
}

export default prompt;
