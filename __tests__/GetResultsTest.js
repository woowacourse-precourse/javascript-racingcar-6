import GetResults from "../src/getResults/GetResults";
import { MissionUtils } from "@woowacourse/mission-utils";

const mockRandoms = (numbers) => {
	MissionUtils.Random.pickNumberInRange = jest.fn();
	numbers.reduce((acc, number) => {
		return acc.mockReturnValueOnce(number);
	}, MissionUtils.Random.pickNumberInRange);
};

describe("GetResults 메소드 테스트", () => {
	test("attempts 수만큼 반복하여 Random한 Number 반환값 저장 후 반환", async () => {
		const cars = ["pobi", "woni"];
		const attempts = 3;
		const inputs = ["6", "3", "3", "6", "3", "3"];

		mockRandoms(inputs);

		const results = await GetResults(cars, attempts);

		expect(results).toEqual(["pobi : -", "woni : -"]);
	});
});
