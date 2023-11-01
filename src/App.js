// class App {
//   async play() {
//     console.log("애플리케이션 시작");

    
//     console.log(MissionUtils.Random.pickNumberInRange(0, 9))

//   }
// }

// export default App;

// 자동차 이름 예외 처리
const carNameInput = document.querySelector('#carName');
const carName = [];

function carNameCheckEvent() {
  const carName = carNameInput.value.split(",");
  console.log(carName);

  let hasError = false;
  // 유저가 입력한 자동차 이름이 다섯 자 이하가 아니라면?
  for (i=0; i<carName.length; i++) {
    if (carName[i].length > 5) {
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

    const tryNumber = document.createElement('input');
    tryNumber.type='text';
    const startRaceBtn = document.createElement('button');
    startRaceBtn.innerHTML = "확인";
    startRaceBtn.onclick = startRaveEvent;

    body.appendChild(tryNumQuestion);
    body.appendChild(tryNumber);
    body.appendChild(startRaceBtn);

    // 경주 게임 시작 함수
    // 시도 횟수 관련 에러(숫자 아님) 예외 처리 먼저
    function startRaveEvent() {
      console.log(isNaN(tryNumber.value));
      if (isNaN(tryNumber.value) === true) {
        hasError = true;
        alert("[ERROR] 숫자가 잘못된 형식입니다.");
        console.log("[ERROR] 숫자가 잘못된 형식입니다.");
      }
    }
  }

}

// 경주 게임 시작 함수
// 시도 횟수 관련 에러(숫자 아님) 예외 처리 먼저
function startRaveEvent() {
  console.log(isNaN(tryNumber.value));
  if (isNaN(tryNumber.value) === true) {
    hasError = true;
    alert("[ERROR] 숫자가 잘못된 형식입니다.");
    console.log("[ERROR] 숫자가 잘못된 형식입니다.");
  }
  // 에러 없으면
  else {
    const gameStart = document.querySelector('h3');
    gameStart.innerHTML = "실행 결과";
    const gameProcess = document.querySelector('div');
    const gameResult = document.querySelector('h3');
    gameResult.innerHTML =  `최종 우승자: ${}`

    
    body.appendChild(gameStart);
    body.appendChild(gameProcess);
    body.appendChild(gameResult);


  }

}
