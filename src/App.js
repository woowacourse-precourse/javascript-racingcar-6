const carNameInput = document.querySelector('#carName');
const carNames = [];

function carNameCheckEvent() {
  const carNames = carNameInput.value.split(",");
  const carsObject = {};
  for (let i = 0; i < carNames.length; i++) {
    carsObject[carNames[i]] = 0; 
  }

  let hasError = false;

  for (i=0; i<carNames.length; i++) {
    if (carNames[i].length > 5) {
      hasError = true;
      alert("[ERROR] 자동자의 이름이 너무 깁니다.");
      console.log("[ERROR] 자동자의 이름이 너무 깁니다.");
      break;
    }
    else if (carNames[i].length === 0) {
      alert("[ERROR] 경주에 참여한 자동차가 없습니다.");
      console.log("[ERROR] 경주에 참여한 자동차가 없습니다.");
      location.reload();
    }
  } 

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

    function startRaceEvent() {
      const tryNumber = parseInt(tryNumberInput.value);

      if (isNaN(tryNumber) === true) {
        hasError = true;
        alert("[ERROR] 숫자가 잘못된 형식입니다.");
        console.log("[ERROR] 숫자가 잘못된 형식입니다.");
      } 
        else {
          const gameStart = document.createElement('h3');
          gameStart.innerHTML = "실행 결과";
          body.appendChild(gameStart);

          for (const carValue in carsObject) {
            const randomValue = MissionUtils.Random.pickNumberInRange(0, tryNumber); 
            carsObject[carValue] = randomValue; 
          }

          let maxCarValue = -1;
          const winningCars = [];

          for (const car in carsObject) {
            const carStatus = document.createElement('p');
            const dashes = '-'.repeat(carsObject[car]);
            carStatus.innerHTML = `${car} : ${dashes}`;
            body.appendChild(carStatus);

            if (carsObject[car] > maxCarValue) {
              maxCarValue = carsObject[car];
              winningCars.length = 0; 
              winningCars.push(car); 
            } else if (carsObject[car] === maxCarValue) {
              winningCars.push(car); 
            }
          }

          const gameResult = document.createElement('h3');
          if (winningCars.length === 1) {
            gameResult.innerHTML = `최종 우승자: ${winningCars[0]}`;
          } else {
            gameResult.innerHTML = `최종 우승자: ${winningCars.join(', ')}`;
          }
          body.appendChild(gameResult);
        }
      }
    }
  }