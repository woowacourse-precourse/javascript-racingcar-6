import { GamePlay, ResultGame } from '../src/test/index.js'

import App from '../src/App.js'

describe("게임 진행 및 결과에 대한 테스트", () => {
  test("게임이 진행되는 결과에 대한 테스트 (랜덤 수에따라 전진잘하는지)", () => {
    const carName = "pobi, woni, fow";
    const playNumber = 3;
    const carNameArr = carName.split(",");
    const boolean = [
      [true, true, false], [true, false, true], [false, false, true]
    ];
    const app = new App();

    const result = [2, 1, 2];
    let gameBoard = app.createGameArr(carNameArr.length);
    for (let idx = 0; idx < playNumber; idx++) {
      gameBoard = GamePlay.moveCarGame(carNameArr, gameBoard, boolean[idx]);
    }
    expect(gameBoard).toEqual(result);
  });
  
  test("게임이 진행되고 나서 결과 발표에 대한 테스트", () => {
    const carName = "pobi, woni, fow";
    const playNumber = 3;
    const carNameArr = carName.split(",");
    const boolean = [
      [true, true, false], [true, false, true], [false, false, true]
    ];
    const app = new App();

    let gameBoard = app.createGameArr(carNameArr.length);
    for (let idx = 0; idx < playNumber; idx++) {
      gameBoard = GamePlay.moveCarGame(carNameArr, gameBoard, boolean[idx]);
    }

    const result = ResultGame.rankAndResult(gameBoard, carNameArr);
    expect(result).toEqual('최종 우승자 : pobi,  fow');
    
  })

})
