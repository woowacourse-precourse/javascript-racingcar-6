

// 출력할 문구들
const MESSAGE = {
  CAR: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  NUM: '시도할 횟수는 몇 회인가요?\n',
  RESULT: '실행결과'
}

// 사용자 입력 추출
async function getUserData(message){
  const USER_DATA = await Console.readLineAsync(message);
  return USER_DATA;
}

class App {
  async play() {
    const CAR_NAMES = await getUserData(MESSAGE.CAR);
    const USER_NUMBER = await getUserData(MESSAGE.NUM);

    
  }
}

export default App;
