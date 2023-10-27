import { getMaxMoveCount, getRacingCarWinner } from "../src/Model/RacingCarGame.js";


describe("자동차 경주 게임 로직 체크", () => {

  const checkMaxMoveCount = () => {
    const TestCase = [
      [
        {carName:'pobi', moveCount : 5},
        {carName:'woni', moveCount : 3},
        {carName:'jun', moveCount : 4}
      ],
      [
        {carName:'pobi', moveCount : 6},
        {carName:'woni', moveCount : 6},
        {carName:'jun', moveCount : 6}
      ]
    ]

    const answerMoveCount = [5,6];
    const answerCarName = [['pobi'], ['pobi','woni','jun']];

    TestCase.forEach((testCase,idx) => {
      test("자동차 경주 최대값 확인", () => {
        expect(getMaxMoveCount(testCase)).toEqual(answerMoveCount[idx])
      })
    })

    TestCase.forEach((testCase,idx) => {
      test("자동차 경주 우승자 확인", () => {
        expect(getRacingCarWinner(testCase)).toEqual(answerCarName[idx])
      })
    })
  }

  checkMaxMoveCount();
})

