# :school: 우아한테크코스 6기 프리코스 2주차 미션 - 자동차 경주

## :clipboard: 구현할 기능 목록
1. 사용자 입력
- 자동차 이름 입력
- 이동 번호 입력

2. 전진 조건
- 0~9 사이의 무작위 값 생성

3. 경주
- 각 자동차의 전진 조건 번호 0 ~ 9의 값 중 값이 4이상일 경우 생성
- 랜덤값이 4이상인 자동차에 '-' 값 추가
- 사용자가 입력한 이동 번호가 끝나면 결과값 생성
- 결과값은 자동차의 '-' 값의 길이 따른 MAX함수 사용 후 비교
- 우승자가 여러 명일 경우에는 쉼표(,)를 이용하여 구분

4. 예외처리
- 사용자 입력값이 5자 초과일 경우 ERROR
- 사용자 입력값이 공백일 경우 ERROR

5. jest 테스트
- 우승자가 한명일 떄 테스트
- 우승자가 다수일 때 테스트
- 경기 횟수 테스트
- 잘못된 입력값 예외처리 테스트

## :file_folder: 패키지 구조 및 파일명
---
- src
  - comm
  - - Validate.js
  - - OutputMessage.js
  - controller
  - - RacingcarController.js
  - model
  - - Racing.js
  - view
  - - UserInput.js
---
- RacingcarController
- == RacingcarController는 model과 view를 관리하며 전체적인 로직 구성을 담당하고있다.
- Comm.js
- == Comm.js는 메세지 출력에 필요한 객체, validation 체크를 하는 함수가 포함되어있다.
- Racing.js
- == Racing.js는 자동차 경주에 필요한 모든 함수를 담고 있다.
- UserInOutput.js
- == UserInOutput.js는 사용자에게 보여지는 화면이라고 가정을 하여 사용자의 입력과 출력에 관한 함수를 담고있다.

## 커밋 메세지 컨벤션
---
- Allowed <type>
- feat (feature)
- fix (bug fix)
- docs (documentation)
- style (formatting, missing semi colons, …)
- refactor
- test (when adding missing tests)
- chore (maintain)
---

## :high_brightness: 기능 구조
---
- 주어진 횟수 동안 n대의 자동차는 전진 또는 멈출 수 있다.
- 각 자동차에 이름을 부여할 수 있다. 전진하는 자동차를 출력할 때 자동차 이름을 같이 출력한다.
- 자동차 이름은 쉼표(,)를 기준으로 구분하며 이름은 5자 이하만 가능하다.
- 사용자는 몇 번의 이동을 할 것인지를 입력할 수 있어야 한다.
- 전진하는 조건은 0에서 9 사이에서 무작위 값을 구한 후 무작위 값이 4 이상일 경우이다.
- 자동차 경주 게임을 완료한 후 누가 우승했는지를 알려준다. 우승자는 한 명 이상일 수 있다.
- 우승자가 여러 명일 경우 쉼표(,)를 이용하여 구분한다.
- 사용자가 잘못된 값을 입력한 경우 throw문을 사용해 "[ERROR]"로 시작하는 메시지를 가지는 예외를 발생시킨 후, 애플리케이션은 종료되어야 한다.
---

## :key: 추가된 요구 사항
---
- indent(인덴트, 들여쓰기) depth를 3이 넘지 않도록 구현한다. 2까지만 허용한다.
  - 예를 들어 while문 안에 if문이 있으면 들여쓰기는 2이다.
  - 힌트: indent(인덴트, 들여쓰기) depth를 줄이는 좋은 방법은 함수(또는 메소드)를 분리하면 된다.
- Jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
  - 테스트 도구 사용법이 익숙하지 않다면 `__tests__/StringTest.js`를 참고하여 학습한 후 테스트를 구현한다.
---