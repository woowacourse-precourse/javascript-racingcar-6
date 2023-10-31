import { Console, Random } from "@woowacourse/mission-utils";
class App {
  async play() {
    // TODO: 경주할 자동차 이름 입력 받기
    const InputCarNames = await Console.readLineAsync(
      "경주할 자동차 이름을 입력하세요. (이름은 쉼표(,) 기준으로 구분)\n"
    );
    // TODO: , 로 구분해서 저장
    const carNames = InputCarNames.split(",");
    // TODO: 유효처리 - 이름이 5자 이하인지
    this.checkCarNameLength(carNames);
    // TODO: 시도할 횟수 입력 받기
    const InputTryCount = await Console.readLineAsync(
      "시도할 횟수는 몇회인가요?\n"
    );
    // TODO: 입력받은 횟수만큼 모든 차에 전진 or 멈춤 게임 진행
    // TODO: 전진할 경우 - 랜덤 숫자 생성 후 4이상일 경우 전진
    // TODO: 멈출 경우 - 랜덤 숫자 생성 후 3이하일 경우 멈춤
    // TODO: 한번 진행할 때마다 현재 상태 출력
    // TODO: 게임 종료 후 우승자 출력
  }

  checkCarNameLength(carNames) {
    carNames.forEach((carName) => {
      if (carName.length > 5) {
        throw new Error("[ERROR] 자동차 이름은 5자 이하만 가능합니다.");
      }
    });
    return;
  }
}

export default App;
