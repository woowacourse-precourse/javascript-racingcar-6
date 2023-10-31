describe("기능 구현 테스트", () => {
  test("경기 종료 전까지 전진", () => {
    let count = 5;
    const carList = [{ carName: "pobi", advance: 0 }];
    const result = [{ carName: "pobi", advance: 5 }];

    const getRandomValue = (car) => {
      const number = 5;

      number >= 4 &&
        carList.filter((data) => data.carName === car.carName && car.advance++);
    };

    while (count > 0) {
      carList.map((advance) => getRandomValue(advance));
      count--;
    }

    expect(carList).toEqual(result);
  });

  test("전진 횟수만큼 '-' 출력", () => {
    const carList = [{ carName: "pobi", advance: 5 }];
    const result = "pobi : -----";

    let carString = "";
    let output = "";

    carList.map((car) => {
      let dashString = "";

      for (let i = 0; i < car.advance; i++) dashString += "-";

      carString = car.carName + " : " + dashString;

      output += carString;
    });

    expect(output).toEqual(result);
  });

  test("자동차 전진 횟수 중 가장 높은 값 추출", () => {
    const carList = [
      { carName: "pobi", advance: 5 },
      { carName: "woni", advance: 4 },
    ];
    const result = 5;

    const highestScore = Math.max(...carList.map((data) => data.advance));

    expect(highestScore).toEqual(result);
  });

  test("우승자 한명일 경우", () => {
    const carList = [
      { carName: "pobi", advance: 5 },
      { carName: "woni", advance: 4 },
    ];
    const highestScore = 5;
    const result = "최종 우승자 : pobi";

    const winnerList = carList.filter((data) => data.advance === highestScore);

    const output =
      "최종 우승자 :" + winnerList.map((winner) => " " + winner.carName);

    expect(output).toEqual(result);
  });

  test("우승자 여러 명일 경우", () => {
    const carList = [
      { carName: "pobi", advance: 5 },
      { carName: "woni", advance: 4 },
      { carName: "jun", advance: 5 },
    ];
    const highestScore = 5;
    const result = "최종 우승자 : pobi, jun";

    const winnerList = carList.filter((data) => data.advance === highestScore);

    const output =
      "최종 우승자 :" + winnerList.map((winner) => " " + winner.carName);

    expect(output).toEqual(result);
  });
});
