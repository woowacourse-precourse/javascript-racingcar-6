import {Input_First, Input_Second} from "./InputScreen.js";
import GAME_RESULT from "./OutScreen.js";

const PLAY_GAME = async () => {
    const NAME_ARRAY = await Input_First();
    const COIN = await Input_Second();
    GAME_RESULT(NAME_ARRAY, COIN);
};
export default PLAY_GAME;