import { MissionUtils } from "@woowacourse/mission-utils";

export async function getCarName(){
  let CarName = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n");
  CarName = CarName.split(",");   //입력받은 문자열을 ","를 기준으로 배열로 저장
  if(CarName.some(Element=>Element.length>5)){
    throw new Error("[ERROR] 이름이 5자리를 초과하였습니다.")
  }
  return CarName;
}

class App {
  async play() {
    try{
     const CarName = await getCarName();
    } catch(error){throw error;}
  }
}

export default App;
