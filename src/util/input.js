import { Console } from "@woowacourse/mission-utils";

export async function input(message){
    return Console.readLineAsync(message);
}
