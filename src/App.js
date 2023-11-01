import { getCarName, getRoundNum } from './GetInput.js';
import compete from './Compete.js';

// ESLint의 Strings must use singlequote 규칙 질문
// js 확장자 관련 질문

class App {
  async play() {
    const carNames = await getCarName();
    const round = await getRoundNum();
    compete(carNames, round);
  }
}

// const myApp = new App();
// myApp.play();

export default App;

// Expected 'this' to be used by class async method 'play':
// 이 오류는 클래스의 메서드 내에서 'this' 키워드를 사용해야 한다는 ESLint 규칙을 위반했음을 알려줍니다.
// 이 규칙은 클래스 메서드가 클래스 인스턴스의 상태를 변경하거나,
// 클래스 인스턴스의 다른 메서드를 사용하는 경우에 유용합니다. 현재 'play' 메서드는 'this' 키워드를 사용하지 않고 있습니다.
// 이 규칙을 해결하는 방법은 여러 가지입니다. 하지만 'play' 메서드가 'this' 키워드를 사용할 필요가 없다면, 이 규칙을 ESLint 설정에서 비활성화할 수 있습니다.
// eslintrc 파일에서 다음과 같이 설정을 변경하세요:
