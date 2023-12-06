import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  /**
   * @param {string} query
   * @returns {string}
   */
  async readText(query) {
    const text = await MissionUtils.Console.readLineAsync(`\n${query}\n`);
    //뛰어쓰기,공백도 글자로 포함
    return text;
  },
};
export default InputView;
