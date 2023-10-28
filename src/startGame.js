export default function startGame(carArr, repeatCount) {
  
  for(let i=0; i<repeatCount; i++){
    // 현재 카운트 주고 전진할수있는지 판단
    // 전진한 횟수 리턴하는 함수
    // 그만큼 - 출력
  }
  
  carArr.map((car)=>{
    if(checkAdvanceCar()){
      
    }
  })

}

export default function checkAdvanceCar(){
  let randomNumber = MissionUtils.Random.pickNumberInRange(0, 9);

  if(randomNumber >= 4) return true;
  return false;
}
