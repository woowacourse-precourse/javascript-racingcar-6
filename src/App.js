/* eslint-disable guard-for-in */
/* eslint-disable no-restricted-syntax */
/* eslint-disable no-plusplus */
import { Random, Console } from '@woowacourse/mission-utils';

class App {
  async play() {
    function Car(name, value = 0) {
      this.name = name;
      this.value = value;
    }

    const carInput = await Console.readLineAsync(
      '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n ',
    );

    const numInput = await Console.readLineAsync(
      '시도할 횟수는 몇 회인가요?\n',
    );

    const carArr = carInput.split(',').map((e) => {
      if (e.length >= 5) {
        throw new Error('[ERROR] 올바른 형식이 아닙니다');
      }
      return e;
    });
    const carObj = carArr.map((e) => new Car(e));

    // 전진할지 멈출지 정하는 함수
    function goStop() {
      for (const obj of carObj) {
        const value = Random.pickNumberInRange(0, 9);
        if (value >= 4) {
          obj.value += 1;
        }
      }
    }

    // 승자 정하는 함수
    function winner(winnerCountArr) {
      const winNubmer = Math.max(...winnerCountArr);
      const winName = [];
      for (const obj of carObj) {
        if (obj.value === winNubmer) {
          winName.push(obj.name);
        }
      }
      Console.print(`최종 우승자: ${winName}`);
    }

    // 승리 갯수 정렬 함수
    function winnerValue() {
      const winnerCount = carObj.sort((a, b) => a.value < b.value);
      const winnerCountArr = winnerCount.map((a) => +a.value);
      // console.log(typeof winnerCountArr[1]);
      winner(winnerCountArr);
    }

    // 진행상황 출력함수
    function carPrint() {
      for (const obj of carObj) {
        Console.print(`${obj.name} : ${'-'.repeat(obj.value)}`);
      }
      Console.print('');
    }

    // 게임횟수 실행
    function carValue() {
      for (let index = 0; index < numInput; index++) {
        goStop();
        carPrint();
      }
    }

    carValue();
    winnerValue();
  }
}

export default App;
