import { MissionUtils } from "@woowacourse/mission-utils";

const inputView = {
  async CarList() {
    const input = await MissionUtils.Console.readLineAsync("입력해주세여\n");
    return input;
  },
};

export default inputView;
