import { Console } from "@woowacourse/mission-utils";

// 유저 입력 받기
export async function getUserData(message) {
    const userData = await Console.readLineAsync(message);
    return userData;
}