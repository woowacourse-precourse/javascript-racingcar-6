import carNameSplit from "../src/components/ui/car_name_input";

describe("자동차 이름 입력에 대한 테스트", () => {
    test("자동차 이름이 하나만 들어 왔을 경우", async () => {
        const input = "car1";
        const result = carNameSplit(input);

        expect(result).toContain("car1");
    });

    test("자동차 이름이 쉼표로 구분되었을 경우", async () => {
        const input = "car1,car2";
        const result = carNameSplit(input);
    
        expect(result).toContain("car2", "car1");
        expect(result).toContainEqual("car1", "car2");
    });
});
  