import { playRacing,finalWinner,printWinner,printResults,tryForward } from "../src/App";
describe(" 함수 테스트", () => {
  test("playRacing  배열 길이  테스트", () => {
    const playRound = 5;
    const carProgress = [0, 0, 0, 0];
    const carNameArray = ["car1", "car2", "car3", "car4"];

    // playRacing 함수 호출
    const result = playRacing(playRound, carProgress, carNameArray);

    expect(result).toEqual(expect.any(Array)); // 반환값은 배열이어야 합니다
    expect(result.length).toBe(carProgress.length); // 반환된 배열의 길이는 carProgress와 같아야 합니다

    result.forEach((roundProgress) => {
      expect(roundProgress).toEqual(expect.any(Number)); 
    });
  });

  test("자동차 목록이 비어있을 때 예외 처리", () => {
    // 빈 자동차 목록
    const playRound = 5;
    const carProgress = [0, 0, 0, 0];
    const carNameArray = [];

    // 빈 자동차 목록을 입력하면 예외가 발생해야 함
    expect(() => playRacing(playRound, carProgress, carNameArray)).toThrow();
  });

  test("finalWinner 우승자 반환 테스트", () => {
    const names = ["car1", "car2", "car3"];
    const progress = [3, 5, 3]; // "car2"가 우승
    const result = finalWinner(names, progress);
    expect(result).toEqual([{ name: "car2", progress: 5 }]);
  });

  test("printWinner 우승자 출력 테스트", () => {
    const winners = [
      { name: "car1", progress: 4 },
      { name: "car2", progress: 4 },
    ];
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();
    printWinner(winners);
    expect(consoleSpy).toHaveBeenCalledWith("최종 우승자 : car1, car2");
    consoleSpy.mockRestore();
  });
  test(`printResult "-" 가 정상적으로 출력 되는지 테스트`, ()=>{
    const consoleSpy = jest.spyOn(console, "log");
    const names = ["car1","car2"];
    const progress = [3,5];
    printResults(names,progress);
    expect(consoleSpy).toHaveBeenCalledWith("car1 : ---");
    expect(consoleSpy).not.toHaveBeenCalledWith("car2 : ---");
  
    consoleSpy.mockRestore();
  });
});
