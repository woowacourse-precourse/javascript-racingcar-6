import Controller from "../src/controllers/Controller.js";
import { Console } from "@woowacourse/mission-utils";
import { ERROR_MESSAGE } from "../src/constants/message.js";
import { mockQuestions } from "./ApplicationTest.js";
import { TEST_CAR_LENGTH } from "../src/constants/testValue.js";

const mockConsole = (input) => {
    Console.readLineAsync = jest.fn();
    Console.readLineAsync.mockImplementation(()=> input);
}


describe("입력 값 에러 테스트 차량", ()=>{

    test.each([ "pobi, al!", "jun, dsq!", 'ddq, df?, +12', 'as dd, asd, ㅁㅂㅂ ㄹ, ㅁsvs f'])('차량 이름이 영어, 숫자로만 이루어져 있는가?', async (input) => { 
        const controllers = new Controller();
        mockConsole(input);
        await expect(controllers.startGame()).rejects.toThrow(ERROR_MESSAGE.CAR_NAME_ONLY_ENGLISH_NUMBER);
     })


     test.each(['pobi,javais', 'pobi,eastjun'])('차량 이름 입력 값의 길이가 1이상 5이하여야 합니다.', async (input) => { 
        const controllers = new Controller();
        mockConsole(input);
        await expect(controllers.startGame()).rejects.toThrow(ERROR_MESSAGE.CAR_NAME_LENGTH);
     })

     test.each(['pobi, pobi', 'jun , jun, pobi'])('차량 중복 이름 테스트', async (input) => { 
        const controllers = new Controller();
        mockConsole(input);
        await expect(controllers.startGame()).rejects.toThrow(ERROR_MESSAGE.CAR_NAME_DUPLICATED);
     })

     test.each(['pobi', TEST_CAR_LENGTH])('차량 대수 확인하기', async (input) => { 
        const controllers = new Controller();
        mockConsole(input);
        await expect(controllers.startGame()).rejects.toThrow(ERROR_MESSAGE.CAR_COUNTING);
     })

     test.each([',', ',,,,', ', fq, fw, as, asd'])('쉼표로 문장 시작 여부 확인하기', async (input) => { 
        const controllers = new Controller();
        mockConsole(input);
        await expect(controllers.startGame()).rejects.toThrow(ERROR_MESSAGE.CAR_NAME_ERROR);
     })
})


describe("게임 진행 입력 횟수 에러 테스트", ()=> {
    test.each([[["as, dq", '#'], ["as, dq", '0'], ["as, dq", 'a'], ["as, dq", '101'], ['a,b', '-1'], ['a,b', '9.6']]])("게임 진행 횟수 입력 오류 확인", async (input)=>{
       const controllers = new Controller();
       mockQuestions(input);
       await expect(controllers.startGame()).rejects.toThrow(ERROR_MESSAGE.TURN_ERROR);
    })
})