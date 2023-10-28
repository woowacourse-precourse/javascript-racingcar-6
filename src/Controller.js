import { Console, Random } from "@woowacourse/mission-utils";
import Data from "./Data.js";

class Controller {
    // 참가자 객체 반환 함수
    static async getPlayer() {
        let player = await Console.readLineAsync(Data.MESSAGE.GET_PLAYER);
        player = player.split(",").map((value) => {
            return value.trim();
        });

        const PLAYER_OBJ = player.reduce((accumulator, value) => {
            return { ...accumulator, [value.trim()]: 0 };
        }, {});

        return PLAYER_OBJ;
    }

    // 반복 횟수 반환 함수
    static async getNumber() {
        const NUMBER = await Console.readLineAsync(Data.MESSAGE.GET_NUMBER);
        return Number(NUMBER);
    }
}

export default Controller;
