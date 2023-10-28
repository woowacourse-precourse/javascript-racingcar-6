import { MissionUtils } from '@woowacourse/mission-utils';

class App {
  async play() {
    //시작 해피해피해피
    const VEHICLE_STRING = await MissionUtils.Console.readLineAsync("경주할 자동차 이름을 입력하세요.(이름은 쉼표(,)기준으로 구분)\n");
    const VEHICLE = VEHICLE_STRING.split(','); //입력받은 문자열을 쉼표 기준으로 슬라이스 해서 배열에 저장
    except_five(VEHICLE);//다섯글자 이내인지 판별
    //console.log(VEHICLE);
    let VEHICLE_GO = []; // 자동차이름, 진행도를 저장하기 위한 이차원배열
    for(let i = 0; i < VEHICLE.length; i++){
      VEHICLE_GO.push([VEHICLE[i],'']);
    }
    //console.log(VEHICLE_GO);
    const TRIAL = await MissionUtils.Console.readLineAsync("시도할 횟수는 몇 회인가요?\n");
    MissionUtils.Console.print("\n실행 결과");

    goStop(TRIAL,VEHICLE_GO);//전진 프로세스
    //console.log(VEHICLE_GO);
    winner(VEHICLE_GO); //최종 우승자
  }
}


//함수부

//반복횟수
function goStop(trial,vehicle){
  for(let i = 0; i < trial; i++){
    push(vehicle);
  }
}

//전진(실행결과 출력포함)
function push(vehicle){
  for(let i = 0; i < vehicle.length; i++){
    if(sixty()){
      vehicle[i][1] += "-"
    }
    MissionUtils.Console.print(`${vehicle[i][0]} : ${vehicle[i][1]}`);
  }
  MissionUtils.Console.print("");
  return vehicle;
}

// 전진조건
function sixty(){
  let turn = MissionUtils.Random.pickNumberInRange(0,9);
  //console.log(turn);
  if (turn >= 4)
    return true;
  else return false;
}

//우승자
function winner(vehicle){
  let temp = [];//진척도를 정수로 저장
  for(let i = 0; i < vehicle.length; i++){
    temp.push(vehicle[i][1].length);
  }
  //console.log(temp)

  const MAX_VALUE = Math.max(...temp); //진척도의 최댓값
  //console.log(MAX_VALUE);

  let winning = []; //우승자(들)의 자리를 저장할 배열
  for(let i = 0; i < temp.length; i++){ //진척도가 최대치와 일치하면 추가
    if(temp[i] == MAX_VALUE){
      winning.push(i);
    }
  }
  //console.log(winning);
  const WINNERS_NAME = []; //우승자들의 이름을 저장할 배열
  for(let i = 0; i < winning.length; i++){
    WINNERS_NAME.push(vehicle[winning[i]][0]);
  }
  //console.log(WINNERS_NAME);
  const PRINT_WINNER = WINNERS_NAME.join(', '); //출력 형식에 맞게 우승자들을 선언

  //console.log(winning);
  MissionUtils.Console.print(`최종 우승자 : ${PRINT_WINNER}`);
}

//입력에 대한 예외처리
function except_five(name){
  for(let i = 0; i < name.length; i++){
    if(name[i].length > 5){
      throw new Error("[ERROR] 자동차의 이름은 다섯글자 이내로 입력해주세요")
    }
  }
}
export default App;


//주석바꿧지롱 커밋할거지롱