import { Console } from "@woowacourse/mission-utils";
import message from "../Message.js";

const continueOrEnd = (status, app) =>{
    if(status == 1) app.play();
    else if(status == 2) Console.print(message.game.END_MESSAGE);
}
export default continueOrEnd;
