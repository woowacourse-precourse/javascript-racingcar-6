import App from "../src/App";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (input) => {
  MissionUtils.Console.readLineAsync = jest.fn();

  MissionUtils.Console.readLineAsync.mockImplementation(() => {
    return Promise.resolve(input);
  });
};

const mockRandoms = (numbers) => {
  MissionUtils.Random.pickNumberInRange = jest.fn();
  numbers.reduce((acc, number) => {
    return acc.mockReturnValueOnce(number);
  }, MissionUtils.Random.pickNumberInRange);
};

describe("기능목록 테스트", () => {
    test("경주 할 n대의 자동차의 이름을 입력받는 함수 테스트", async () => {
      const input = 'audi,benz,kia';
      
      mockQuestions(input);

      const app = new App();
      const result = await app.participatingCar();

      expect(result).toEqual(['audi','benz','kia']);
    });
  
    test("몇번의 이동을 할 것인지 입력받는 함수 테스트", async () => {
      const input = "3";
      
      mockQuestions(input);

      const app = new App();
      const result = await app.numberOfMoves();
    
      expect(result).toEqual(3);
    });
  
    test("각 차량의 라운드별 이동거리 추적 함수 테스트", () => {
      const testMoveOfCars = ['-','--','-','---'];
      const testRoundRandomNumber = [1,3,5,2];
        
      const app = new App();
      const result = app.trackingCarsMove(testMoveOfCars, testRoundRandomNumber);

      expect(result).toEqual(['-','--','--','---']);
    });
  
    test("각 차량마다 라운드별 랜덤번호 생성 테스트", () => {
      const testParticipatingCarsNumber = 5;
      const testRandomNumbers = [1,3,5,7,4];

      mockRandoms([...testRandomNumbers]);
      
      const app = new App();
      const result = app.createRoundRandomNumbers(testParticipatingCarsNumber);
  
      expect(result).toEqual(testRandomNumbers);
    });

    test("레이싱의 우승자 선정 테스트", () => {
        const testParticipatingCars = ['audi','benz','kia','honda'];
        const testMoveOfCars = ['-','--','---','---'];
        
        const app = new App();
        const result = app.winnerSelect(testParticipatingCars,testMoveOfCars);

        expect(result).toEqual('kia,honda');
    });

    test("진행 과정을 출력해주는 함수 테스트", () => {
        const testParticipatingCars = ['audi','benz','kia'];
        const testNumberOfMoves = 3;
        const testRandomNumbers = [...[1,3,5],...[2,4,6],...[7,5,3]];

        mockRandoms([...testRandomNumbers]);

        const app = new App();
        const result = app.startRacing(testParticipatingCars, testNumberOfMoves);

        expect(result).toEqual('benz,kia');
    });
  });
  