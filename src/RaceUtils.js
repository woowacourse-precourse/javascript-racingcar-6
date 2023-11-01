import CONSTANTS from "./Constants";
import { RACE } from "./Logs";
import { Random, Console } from "@woowacourse/mission-utils";

class RaceUtils {
    static shouldMoveForward() {
        const pickNumber = Random.pickNumberInRange(
            CONSTANTS.MIN_NUM,
            CONSTANTS.MAX_NUM,
        );
        return pickNumber >= CONSTANTS.IS_FORWARD;
    }
    static moveCarForWard(player) {
        const updatedTrackLocation = player.updatedTrackLocation.concat(RACE.PROGRESS_BAR);
        return {...player, trackLocation: updatedTrackLocation};
    }

    static findWinners(playersData) {
        const farthestTrackLocation = Math.max(
            ...playersData.map(player => player.trackLocation.length),
        );
        return playersData
            .fliter(player => player.trackLocation.length === farthestTrackLocation)
            .map(player => player.playerName);
    }
    static announceWinners(winners) {
        Console.print(RACE.WINNERS + winners.join(', '));
    }
    static proceedEachRaceTurn(playersData) {
        return playersData.map(player => {
            if (this.shouldMoveForward(player)) {
                return this.moveCarForWard(player);
            }
            return player;
        });
    }
    static printRaceStatus(playersData) {
        let raceStatus = '';
        playersData.forEach(player => {
            raceStatus += '${player.playerName} : ${player.trackLocation}\n';   
        });
        Console.print(raceStatus);
    }
}

export default RaceUtils;