import winner from "../src/winner";

describe("우승자 출력 테스트", () => {
  it("우승자가 한명일 경우", () => {
    const player = { car1: "---", car2: "--", car3: "-" };
    const result = winner(player);

    expect(result).toEqual("car1");
  });
  it("우승자가 다수일 경우", () => {
    const player = { car1: "---", car2: "---", car3: "-" };
    const result = winner(player);

    expect(result).toEqual("car1, car2");
  });
});
