import { Console } from "@woowacourse/mission-utils";
let names;
let err=0;
let go_arr=[]

class App {
  async play() {
    this.car_name();
  }

  //자동차 이름 입력 받기
  async car_name(){
    const str= await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
    names=str.split(',');
    this.car_name_length();
    if(err==1){
      throw new Error("ERROR");
    }
    this.try();
  }

  //자동차 이름 6자 이상일 경우 에러
  async car_name_length(){
    for(let i=0; i<names.length; i++){
      if(names[i].length>=6){
        err=1;
      }
    }
  }

  //시도할 횟수 입력 받기
  async try(){
    const try_n= await Console.readLineAsync("시도할 횟수는 몇 회인가요? ");

    for(let i=0; i<names.length; i++){  //[0,0,0]
      go_arr.push(0);
    }
    
    Console.print("");
    Console.print("실행결과");
    for(let i=0; i<try_n; i++){
      this.go_stop();
    }

    this.who_winner();
  }

  //n대의 자동차 전진 or 멈춤
  async go_stop(){
    for(let i=0; i<names.length; i++){  
      let random=MissionUtils.Random.pickNumberInRange(0, 9);
      if(random>=4){
        go_arr[i]=go_arr[i]+1
      }
    }
    this.go_stop_print();
  }

  async go_stop_print(){
    for(let i=0; i<names.length; i++){
      Console.print(names[i]+" : "+"-".repeat(go_arr[i]));
    }
    Console.print("");
  }

  //최종 우승자
  async who_winner(){
    let winner_index=[];
    let most_score=Math.max(...go_arr)

    //go_arr에서 most_score 값이 저장된 인덱스 값을 winner_index값에 저장
    for(let i=0; i<go_arr.length; i++){
      if(most_score==go_arr[i]){
        winner_index.push(i);
      }
    }

    let winner_name='';
    for(let i=0; i<winner_index.length; i++){
      winner_name=winner_name.concat(names[winner_index[i]]);
      if(i!=winner_index.length-1){
        winner_name.concat(", ");
      }
    }
    Console.print("최종 우승자 : "+winner_name);
    }
}

export default App;
