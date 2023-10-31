// class App {
//   async play() {
//     console.log("애플리케이션 시작");

    
//     console.log(MissionUtils.Random.pickNumberInRange(0, 9))

//   }
// }

// export default App;

// 자동차 이름 예외 처리
const carNameInput = document.querySelector('#carName');

function carNameCheckEvent() {
  const carName = carNameInput.value.split(",");
  console.log(carName);

  // 유저가 입력한 자동차 이름이 다섯 자 이하가 아니라면?
  for (i=0; i<carName.length; i++) {
    if (carName[i].length > 5) {
      alert("[ERROR] 자동자의 이름이 너무 깁니다.");
      console.log("[ERROR] 자동자의 이름이 너무 깁니다.");
    }
  }

}