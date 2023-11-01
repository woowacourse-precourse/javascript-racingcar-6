# 프리코스 2주차 미션 - :car: 자동차 경주

### :ocean: USER APP FLOW

1. 앱 실행 및 입력값(자동차 이름, 경주 횟수) 입력받기
2. 각 시도별 실행 결과 출력
3. 최종 우승자 출력 및 앱 종료

---

### :clipboard:구현 기능 목록

**[출력 함수]**
- printMessage
    - `@wooacourse/mission-utils`  의 `Console.print` 사용
- printErrorMessage
    - `throw new Error` 에 대한 함수화

**[사용자 입력 처리 및 검증 함수]**
- getUserInput
    - 자동차 이름과 시도 횟수 입력받기
- validateNameInput
    - 사용자 입력값 자동차 이름에 대한 검증
        - 입력값이 5자를 초과하는 경우
- validateCountInput
    - 사용자 입력값 시도 횟수에 대한 검증
        - 숫자가 아닌 입력이 있는 경우
        - 0 이하의 숫자를 입력받은 경우

**[자동차 경주 진행 함수]**
- playSingleRound
    - 한 라운드를 진행하는 함수
    - 각 자동차에 대해 랜덤값 생성 후, 4보다 큰 값일 경우 한칸 전진
        - `@wooacourse/mission-utils` 의 `Random.pickNumberInRange` 사용
    - 각 라운드 별 진행도를 숫자 배열로 반환
- printeachRoundResult
    - 각 라운드 별 진행상황을 문자로 출력
- getWinners 
    - 최종 결과를 통해 우승자를 문자 배열로 반환
        - 우승자가 여러명일 경우 쉼표 (',') 로 구분
- playRacingGame
    - 위의 함수들을 아울러 전체적인 자동차 경주를 진행


---

### :page_facing_up: 파일 구조도

- src
  - utils
    - messages.js
  - App.js
  - index.js
  - getUserInput.js
  - playRacingGame.js


---

### :heavy_check_mark: 추가 요구 사항

- indent(인덴트, 들여쓰기) 제한. 최대 2까지만 허용
- jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
