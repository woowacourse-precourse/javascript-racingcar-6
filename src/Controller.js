import { Console, Random } from "@woowacourse/mission-utils";
import Data from "./Data.js";

class Controller {
    // 참가자 객체 반환 함수
    static async setPlayer() {
        let player = await Console.readLineAsync(Data.MESSAGE.GET_PLAYER);
        // 공백 제거 및 배열로 분리
        player = player.split(",").map((value) => {
            return value.trim();
        });
        // 배열의 요소를 가지고 객체화
        const PLAYER_OBJ = player.reduce((accumulator, value) => {
            return { ...accumulator, [value.trim()]: 0 };
        }, {});

        return PLAYER_OBJ;
    }

    // 반복 횟수 반환 함수
    static async setNumber() {
        const NUMBER = await Console.readLineAsync(Data.MESSAGE.GET_NUMBER);
        return Number(NUMBER);
    }

    // 경기 진행 함수
    static raceProgress() {
        Object.keys(Data.input.player).forEach((key) => {
            if (4 <= Random.pickNumberInRange(0, 9))
                Data.input.player[key] += 1;
        });
        return;
    }

    // 현재 결과 문자열 반환 함수
    static raceResultText(obj) {
        let raceResult = "";
        Object.keys(obj).forEach((key) => {
            raceResult += `${key} : ${"-".repeat(obj[key])}\n`;
        });
        return raceResult;
    }

    // 우승자 문자열 반환 함수
    static winnerText(obj) {}
}

export default Controller;
