import { Console } from '@woowacourse/mission-utils';

const OutputView = async (message, result) => {
  await Console.print(message);
  await Console.print(result);
};
export default OutputView;
