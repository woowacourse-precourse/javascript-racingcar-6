import { MissionUtils } from '@woowacourse/mission-utils';

const InputView = {
  async readText(query) {
    const text = await MissionUtils.Console.readLineAsync(`\n${query}\n`);
    //뛰어쓰기,공백도 글자로 포함
    return text;
  },
};
export default InputView;
