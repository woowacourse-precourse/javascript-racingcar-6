import CarRacingGame from "../../src/models/carRacingGame.js"

describe("CarRacingGame 모델 기능 테스트", () => {
  test("입력 받은 자동차 이름 문자열을 배열의 형태로 반환", () => {
    const carListString = "pobi, jiwoo";
    const result = CarRacingGame.setupCarList(carListString);

    expect(result[0].name).toBe("pobi");
    expect(result[1].name).toBe("jiwoo");
  });

  test("전진 여부를 결정짓고, 값을 추가한다.", () => {
    const carListArr = [
      {
        name: "pobi",
        numberOfMovesForward: 0,
      },
      {
        name: "jiwoo",
        numberOfMovesForward: 0,
      }
    ];
    while(true) {
      CarRacingGame.decideWheterToMoveForward(carListArr);
      
      if (carListArr.findIndex((car) => car.numberOfMovesForward > 0) >= 0) {
        break;
      }
    }
  });

  test("배열에서 최종 우승자를 추려 반환한다.", () => {
    const carListArr = [
      {
        name: "pobi",
        numberOfMovesForward: 0,
      },
      {
        name: "jiwoo",
        numberOfMovesForward: 2,
      }
    ];
    const result = CarRacingGame.getFinalWinner(carListArr);

    expect(result[0].name).toBe("jiwoo");
  });
})