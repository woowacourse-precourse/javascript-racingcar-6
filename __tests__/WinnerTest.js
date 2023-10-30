import Winner from "../src/RacingCar/Winner";

test("가장 멀리 간 자동차를 우승자로 선정", () => {
  const input = [
    { name: "pobi", distance: "---" },
    { name: "ann", distance: "-" },
    { name: "sera", distance: "---" },
  ];
  const winner = new Winner(input);

  expect(winner.name).toContain("pobi", "sera");
});
