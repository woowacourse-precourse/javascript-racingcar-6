import { MissionUtils } from "@woowacourse/mission-utils";

class App {
  async play() {
    // 자동차 이름 입력
    const carStr = await MissionUtils.Console.readLineAsync('닉네임을 입력해주세요.');
    const carArr = carStr.split(',');
    
    if (carArr.length === 1) throw new Error("[ERROR] 자동차는 2개 이상이어야 합니다.");
    carArr.map((v, idx) => {
      if (v.length > 5) throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
      if (!/[\w]+/.test(v)) throw new Error("[ERROR] 자동차 이름은 문자여야 합니다.");
      if (carArr.indexOf(v) !== idx) throw new Error("[ERROR] 자동차 이름은 중복될 수 없습니다.");
    })

  }
}

export default App;
