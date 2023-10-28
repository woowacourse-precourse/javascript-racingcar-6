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
    static getRaceResultText(obj) {
        let raceResult = "";
        Object.keys(obj).forEach((key) => {
            raceResult += `${key} : ${"-".repeat(obj[key])}\n`;
        });
        return raceResult;
    }

    // 우승자 문자열 반환 함수
    static getWinnerText(obj) {
        // 최고기록 저장
        const WINNER_VALUE = Object.values(obj).reduce((value1, value2) => {
            return Math.max(value1, value2);
        });
        // 최고기록인 사람 배열로
        const WINNER_ARRAY = Object.keys(obj).filter((key) => {
            if (obj[key] === WINNER_VALUE) return key;
        });
        // 문자열화
        return WINNER_ARRAY.join(", ");
    }
}

export default Controller;
