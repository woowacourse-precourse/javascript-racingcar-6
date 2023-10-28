import { MissionUtils } from "@woowacourse/mission-utils";
import { isValidName } from "./validation";
import { inputCarNamesMessage } from "../constant/inputMessage";

export default async function inputCarNames() {
    const carNames = await MissionUtils.Console.readLineAsync(inputCarNamesMessage);
    const  separateCarName = carNames.split(",");
    isValidName(separateCarName);
    return separateCarName;
}
