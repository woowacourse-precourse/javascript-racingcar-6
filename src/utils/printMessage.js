import { Console } from "@woowacourse/mission-utils";

export const printMessage = async (message) => {
	const inputValue = await Console.readLineAsync(message);
	return inputValue;
	
};


