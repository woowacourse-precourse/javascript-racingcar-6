import { Random, Console } from '@woowacourse/mission-utils';

// 경주 자동차 클래스

class App {
  async play() {
    try{
      const input = await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분) ");
      const carNames = input.split(',').map(name => name.trim())

      const rounds = parseInt(await Console.readLineAsync("시도할 횟수는 몇 회인가요? "));
      
    } catch (error){
      Console.print(error.message);
      throw error;
    }
  }

  // 경기 시작

  // 우승자
}

export default App;