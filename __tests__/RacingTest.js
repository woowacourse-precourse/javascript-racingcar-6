import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
const mockQuestions = (inputs) => {
    MissionUtils.Console.readLineAsync = jest.fn();
  
    MissionUtils.Console.readLineAsync.mockImplementation(() => {
      const input = inputs.shift();
      return Promise.resolve(input);
    });
  };
  
describe('자동차 경주 게임',()=>{
    test('경주할 자동차 이름 구분(이름은 쉼표(,) 기준으로 구분),',()=>{
        //given
        const carName1 = ["pobi","javaji"];
        const carName2 = ["pobi","east"];
        const carName3=["pobi,"];
        const carName4=[""];
        const carName5=[" "];
        
        //when
        const app=new App();

        //then
        expect(app.checkCarNameValidation(carName1)).toBeFalsy();
        expect(app.checkCarNameValidation(carName2)).toBeTruthy();
        expect(app.checkCarNameValidation(carName3)).toBeTruthy();
        expect(app.checkCarNameValidation(carName4)).toBeFalsy();
        expect(app.checkCarNameValidation(carName5)).toBeFalsy();
    })
    test.each([
        [["pobi,javaji"]],
        [["pobi,east"]],
        [["pobi,"]],
        [[""]],
        [[" "]],
    ])('자동차이름 잘못 입력시 ERROR 후 종료',async(inputs)=>{
        //given
        mockQuestions(inputs)
        
        //when
        const app= new App();

        //then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    })
    test.each([
        ["3"],
        ["123"],
    ])('시도한 횟수 입력처리-숫자',async(inputs)=>{
        //given

        //when
        const app= new App();

        //then
        expect(app.checkCarTryValidation(inputs)).toBeFalsy();
    })
    test.each([
        ["ab"],
        ["ab123"],
    ])('시도한 횟수 입력처리-문자',async(inputs)=>{
        //given

        //when
        const app= new App();

        //then
        expect(app.checkCarTryValidation(inputs)).toBeTruthy();
    })
    test.each([
        [["pobi,javaji","1"]],
        [["pobi,east","A"]],
    ])('횟수 잘못 입력시 ERROR 후 종료',async(inputs)=>{
        //given
        mockQuestions(inputs)
        
        //when
        const app= new App();

        //then
        await expect(app.play()).rejects.toThrow("[ERROR]");
    })
    }
);