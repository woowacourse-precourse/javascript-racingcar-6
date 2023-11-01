class App {
  async play() {

    //경주할 자동차 이름
    const carNames = await Console.readLineAsync('경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분 : ');
    const attempts = await Console.readLineAsync('시도할 횟수는 몇 회인가요? : ')

    const carNameList = carNames.split(",").map(name => name.trim());

    // 자동차 이름이 5자 초과일 때 에러 처리
    if (carNameList.some(name => name.length > 5)) {
      throw new Error("[ERROR] 자동차 이름은 5자 이하여야 합니다.");
    }
    
    // 시도 횟수만큼 경주 게임 실행
    function runRace(carNames, attempts) {
      const carStatus = carNames.map(name => ({ name, position: 0 }));
      let winners = [];

      for (let i = 0; i < attempts; i++) {
        carStatus.forEach(car => {
          const randomValue = Math.floor(Math.random() * 10);
          if (randomValue >= 4) {
            car.position++;
          }
        });
      }

  // 최대 이동 거리 계산
  const maxPosition = Math.max(...carStatus.map(car => car.position));

  // 승자(들) 찾기
  carStatus.forEach(car => {
    if (car.position === maxPosition) {
      winners.push(car.name);
    }
  });

  return winners;
}

// 경주 게임 실행
try {
  const winners = runRace(carNameList, attempts);

  console.log("최종 우승자 : " + winners.join(", "));
} catch (error) {
  console.error("[ERROR] " + error.message);
}


  }
}





export default App;
