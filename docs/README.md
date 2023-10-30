# 프리코스 2주차 미션 - :car: 자동차 경주

### :ocean: USER APP FLOW

1. 앱 실행 및 입력값(자동차 이름, 경주 횟수) 입력받기
2. 각 시도별 실행 결과 출력
3. 최종 우승자 출력 및 앱 종료

---

### :clipboard:구현 기능 목록

[입력값 설정]
- 자동차 이름 입력받기
    - [조건] 이름은 쉼표를 기준으로 구분, 5자 이하여햐 한다.
- 시도 횟수 입력받기 
    - [조건] 입력은 0 이상의 숫자여야 한다.

[로직 구현]
- 각 자동차별 전진 기능 구현
    - 0~9 사이의 무작위 값을 구한 후, 해당 값이 4 이상일 경우에 전진.
- 최종 우승자 판별 기능 구현
    - 최종 전진 결과를 판단하여 우승자를 출력한다.
        - [조건] 우승자가 여러 명인 경우 쉼표로 구분한다.

[출력 함수]
- printMessage
    - `@wooacourse/mission-utils`  의 `Console.print` 사용
- printErrorMessage
    - `throw new Error` 에 대한 함수화

[사용자 입력 처리 및 검증 함수]
- getUserInput
    - 자동차 이름과 시도 횟수 입력받기
- validateNameInput
    - 사용자 입력값 자동차 이름에 대한 검증
        - 입력값이 5자를 초과하는 경우
- validateCountInput
    - 사용자 입력값 시도 횟수에 대한 검증
        - 숫자가 아닌 입력이 있는 경우
        - 0 이하의 숫자를 입력받은 경우

---

### :page_facing_up: 파일 구조도

- src
  - utils
  - App.js
  - index.js
  - constants.js
    - 상수값 처리

---

### :heavy_check_mark: 추가 요구 사항

- indent(인덴트, 들여쓰기) 제한. 최대 2까지만 허용
- jest를 이용하여 본인이 정리한 기능 목록이 정상 동작함을 테스트 코드로 확인한다.
