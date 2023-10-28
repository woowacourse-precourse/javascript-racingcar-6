import App from "../src/App.js";
import { MissionUtils } from "@woowacourse/mission-utils";
const {Random} = MissionUtils;

describe("Fn 기능 테스트", () => {
    test("자동차 게임 결과",async () => {
        let input = 5;
        let output = [2,3,5,4,1];
        let result = 0;
        const testRaceResult = (input,output) => { 
        for(let i = 0; i < output.length; i++){
            if(output[i] == input){
                result += 1;
                return result;
            }
        }
    }

        expect(testRaceResult(input,output)).toEqual(1);
    })
})