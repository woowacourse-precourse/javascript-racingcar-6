# 구현할 기능 목록

- 경주할 자동차 이름을 입력받는 함수
- 시도할 횟수를 입력받는 함수
- 실행 결과 출력
- 우승자 안내 문구를 출력
- 무작위로 각 자동차가 전진하거나 멈추도록 하는 함수
- 사용자가 잘못된 값을 입력했을 때 예외 처리 (6자 이상의 이름, 숫자가 아닌 시도횟수, 중복된 이름, 시도횟수가 0이거나 음수)
- 실행

---

## 추가로 고려할 사항

- 상수 쓰기
- 변수, 함수명 명확하게
- MVC패턴 적용해보기
- for 대신 forEach 사용하기
- 함수별로 테스트 작성해보기

---

## MVC 패턴으로 나누기

- model : setCarData, getCarData, setTrialNumber, getTrialNumber, moveOrStay
- view : printResult, printWinner, printResultMessage, lineBreak
- controller : inputCarName, inputTrialNumber, race
- validation : isValidCarName, isValidTrialNumber, isSameCarName
