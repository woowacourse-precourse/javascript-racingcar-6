import { Console, Random } from "@woowacourse/mission-utils";
import Data from "./Data.js";

class Controller {
    // 참가자 객체 반환 함수
    static async getPlayer() {
        let tmp_player = await Console.readLineAsync(Data.MESSAGE.GET_PLAYER);
        tmp_player = tmp_player.split(",").map((value) => {
            return value.trim();
        });

        const TMP_PLAYER_OBJ = tmp_player.reduce((accumulator, value) => {
            return { ...accumulator, [value.trim()]: 0 };
        }, {});

        return TMP_PLAYER_OBJ;
    }
}

export default Controller;
