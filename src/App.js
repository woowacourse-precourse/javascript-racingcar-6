import { Console } from "@woowacourse/mission-utils";
let names;
let err=0;

class App {
  async play() {
    this.car_name();
  }

  //자동차 이름 입력 받기
  async car_name(){
    try{
      const str= await Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)");
      names=str.split(',');
      this.car_name_length();
      if(err==1){
        throw "ERROR";
      }
    }
    catch(error){
      Console.print(error);
    }
  }

  //자동차 이름 6자 이상일 경우 에러
  async car_name_length(){
    for(let i=0; i<names.length; i++){
      if(names[i].length>=6){
        err=1;
      }
    }
  }
}

export default App;
