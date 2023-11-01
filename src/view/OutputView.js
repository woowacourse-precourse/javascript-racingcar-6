// import { Console } from '@woowacourse/mission-utils';
// import RaceController from '../controller/RaceController';

// export default class OutputView {
//   constructor() {
//     this.raceController = new RaceController();
//   }

//   printResult() {
//     // 회차별 각 차량 전진 횟수 프린트 함수
//     const { carList } = this.raceController;
//     carList.forEach(car => {
//       const score = `-`.repeat(car.score);
//       Console.print(`${car.name} : ${car.score}`, score);
//     });
//     Console.print('\n');
//   }

//   printWinner() {
//     // 최종 전진 누적 횟수 프린트 함수
//     const { carList } = this.raceController;
//     let winner = [];
//     let highestScore = 0;
//     carList.forEach(car => {
//       highestScore = Math.max(highestScore, car.score);
//     });
//     winner = carList
//       .filter(car => car.score === highestScore)
//       .map(car => car.name)
//       .join(',');
//     Console.print(`최종 우승자 : ${winner}`);
//   }
// }
