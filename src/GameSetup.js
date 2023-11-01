import { Console } from "@woowacourse/mission-utils";
import GameSetup from '../src/GameSetup';
import { CustomError } from "./Error";

class GameSetup {
    static async getPlayerCarsInput() {
        const CARS_NAME_INPUT = await Console.readLineAsync(
            PLAYER_INPUT.CARS_NAME_PROMPT,
        );
        const CAR_NAMES_INPUT_ARRAY = CAR_NAMES_INPUT.split(',');

        if(Validation.isPlayerCarNameValidated(CAR_NAMES_INPUT_ARRAY)) {
            return [...CAR_NAMES_INPUT_ARRAY];
        }
        return null;
    }
    static createPlayerData(raceEntry) {
        const playersData = raceEntry.map(playerName => ({
            playerName,
            TrackLocation: '',
        }));
        return playersData;
    }
    static async getPlayerTryNumberInput() {
        const TRY_NUMBER_INPUT = await Console.readLineAsync(
            PLAYER_INPUT.TRY_NUMBER_PROMPT,
        );

        if(Validation.isPlayerTryNumberValidated(TRY_NUMBER_INPUT)) {
            return Number(TRY_NUMBER_INPUT);
        }
        return null;
    }
}

export default GameSetup;