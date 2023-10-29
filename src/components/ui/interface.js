import { MissionUtils } from "@woowacourse/mission-utils";
import carNameInput from "./car_name_input.js";

async function gameInterface() {
    let carName = await carNameInput();
    MissionUtils.Console.print(carName);
};

export default gameInterface;