class App {
  async play() {
    MissionUtils.Console.print('자동차 경주 게임을 시작합니다.');

    // TODO: Mission 1: 자동차 생성 및 이름 부여 메서드입니다.
    const carNames = await MissionUtils.Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요 (이름은 쉼표(,)로 구분):',
    );

    // TODO: Mission 2: 이동 시도 횟수 입력 메서드입니다.
    const totalAttempts = parseInt(
      await MissionUtils.Console.readLineAsync('시도할 횟수를 입력하세요:'),
      10,
    );

    // TODO: Mission 5: 오류 처리 메서드입니다.
  }
}

export default App;
