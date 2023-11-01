// class App {
//   async play() {
//     console.log("애플리케이션 시작");

    
//     console.log(MissionUtils.Random.pickNumberInRange(0, 9))

//   }
// }

// export default App;

// 자동차 이름 예외 처리
const carNameInput = document.querySelector('#carName');
const carNames = [];

function carNameCheckEvent() {
  const carNames = carNameInput.value.split(",");
  console.log(carNames);
  const carsObject = {};
  for (let i = 0; i < carNames.length; i++) {
    carsObject[carNames[i]] = 0; 
  }
  console.log(carsObject);


  let hasError = false;
  // 유저가 입력한 자동차 이름이 다섯 자 이하가 아니라면?
  for (i=0; i<carNames.length; i++) {
    if (carNames[i].length > 5) {
      hasError = true;
      alert("[ERROR] 자동자의 이름이 너무 깁니다.");
      console.log("[ERROR] 자동자의 이름이 너무 깁니다.");
      break;
    }
  } 

  // 자동차 이름 관련한 에러가 없으면
  if (!hasError) {
    const body = document.querySelector('body');
    const tryNumQuestion = document.createElement('h3');
    tryNumQuestion.innerHTML = "시도할 횟수는 몇 회인가요?";

    const tryNumberInput = document.createElement('input');
    tryNumberInput.type='text';
    const startRaceBtn = document.createElement('button');
    startRaceBtn.innerHTML = "확인";
    startRaceBtn.onclick = startRaceEvent;

    body.appendChild(tryNumQuestion);
    body.appendChild(tryNumberInput);
    body.appendChild(startRaceBtn);

    // 경주 게임 시작 함수
    // 시도 횟수 관련 에러(숫자 아님) 예외 처리 먼저
    function startRaceEvent() {
      const tryNumber = parseInt(tryNumberInput.value);
      // console.log(parseInt(tryNumber));
      // console.log(isNaN(tryNumber.value));
      if (isNaN(tryNumber) === true) {
        hasError = true;
        alert("[ERROR] 숫자가 잘못된 형식입니다.");
        console.log("[ERROR] 숫자가 잘못된 형식입니다.");
      }
      // 에러 없으면
      else {
        const gameStart = document.querySelector('h3');
        gameStart.innerHTML = "실행 결과";

        for (const carValue in carsObject) {
          const randomValue = MissionUtils.Random.pickNumberInRange(0, tryNumber); 
          carsObject[carValue] = randomValue; // 랜덤값을 각 자동차의 값으로 설정
        }
        console.log(carsObject);

        let maxCarValue = -1;
        const winningCars = [];

        // 객체를 웹 상에 출력
        for (const car in carsObject) {
          const carStatus = document.createElement('p');
          const dashes = '-'.repeat(carsObject[car]);
          carStatus.innerHTML = `${car} : ${dashes}`;
          body.appendChild(carStatus);

          if (carsObject[car] > maxCarValue) {
            maxCarValue = carsObject[car];
            winningCars.length = 0; // 우승자 배열 초기화
            winningCars.push(car); // 새로운 최고 점수 우승자 추가
          } else if (carsObject[car] === maxCarValue) {
            winningCars.push(car); // 동점자 추가
          }
        }

        // 최종 우승자 출력
        const gameResult = document.querySelector('h3');
        if (winningCars.length === 1) {
          gameResult.innerHTML = `최종 우승자: ${winningCars[0]}`;
        } else {
          gameResult.innerHTML = `최종 우승자: ${winningCars.join(', ')}`;
        }

        body.appendChild(gameResult);
      }
      body.appendChild(gameStart);
      body.appendChild(gameResult);
      
      }

    }
  }



