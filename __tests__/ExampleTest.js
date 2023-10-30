import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  };
  
  const mockRandoms = (numbers) => {
    MissionUtils.Random.pickNumberInRange = jest.fn();
    numbers.reduce((acc, number) => {
      return acc.mockReturnValueOnce(number);
    }, MissionUtils.Random.pickNumberInRange);
  };
  
  const getLogSpy = () => {
    const logSpy = jest.spyOn(MissionUtils.Console, "print");
    logSpy.mockClear();
    return logSpy;
  };
//   const getNumberSpy = () => {
//     const numberSpy = jest.spyOn();
//     numberSpy.mockClear();
//     return numberSpy;
//   }
//   const mockTryNumbers = (numbers) => {
//     MissionUtils.Random.pickNumberInRange = jest.fn();
//     numbers.reduce((acc,number)=>{
//         return acc.mockReturnValueOnce(number)
//     },number)
//   };



describe("에러 테스트", () => {
    test("이름이 다섯글자가 넘을때 ERROR", async () => {
        const tryOverFive = ["woosup,pobi"];
        mockQuestions(tryOverFive);
        const app = new App();
        await expect(app.play()).rejects.toThrow("[ERROR]");
    });
});
describe("시도하기",()=>{
    test("임의의 시도",async()=>{
        const goArray = [1,4,3,4,5];
        const logSpy = getLogSpy();
        const inputs = ["pobi,woosu,drago,woni,jun","1"]
        const outputs = ["woosu : -"]
        
        mockQuestions(inputs);
        mockRandoms([...goArray]);
        const app = new App();
        await app.play();
        outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output))
        });  
    })
})
describe("시도하기",()=>{
    test.each([[1,4,3,4,5],
        [5,7,2,7,2],
        [9,5,2,7,3],
        [1,9,3,7,5],
        [8,7,6,5,4]])("전체 임의 시도",async (tryArray)=>{
        const logSpy = getLogSpy();
        const inputs = ["pobi,woosu,drago,woni,jun","2"];
        const outputs = ["woosu, woni"];

        mockQuestions(inputs);
        mockRandoms([...tryArray]);
        const app = new App();
        await app.play();
        outputs.forEach((output) => {
        expect(logSpy).toHaveBeenCalledWith(expect.stringContaining(output)) 
        });
    })
})


// const tryNumber = App.attemptNumber();