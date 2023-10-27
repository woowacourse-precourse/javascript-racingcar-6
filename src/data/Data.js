/*

class 핵심알고리즘 {

  #players = []; //--------------------constructor
  #playersLength = 3; //while 문 몆번 돌지 알기위해 --------constructor

  #ScoreData = [];// 점수 누적 [2,1,1]
  #RoadData =[] // 주행 도로 로그 누적[-, --,-]
  #playAttempt = 5; //-------------------------------------------construtor
  #playTimes = 0; // 콜백 탈출을위해

  async play() {
    
    this.stack(makeRandom)
    this.gameRsult();
  }

  async stack(randomArray) {
    
    this.#ScoreData = F1(this.#ScoreData, randomArray) // 우승자 확인위해 게임 시작전 데이터 전송(누적)

    this.#RoadData = F2(this.#RoadData, randomArray); // 도로 로그 추가(누적)
  
    this.#RoadData.forEach((element, index) => {
      
      console( #this.plyers[index] + : + element  )
      
    })

    this.#playTimes++ //플레이타임 갱신
    if(playTimes === this.#playAttempt) {
      return // 게임탈출
    }  
    this.stack(newRandom) // 탈출못하면 재시작
  
  }

  gameRsult() {
    console ( Max(this.#ScoreData) )
  }

}
*/
