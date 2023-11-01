# 📝 구현해야 할 기능 목록

- 사용자로부터 이름 및 게임 시도 횟수 입력 받기
- 랜덤값(0~9) 생성
- 전진 조건 확인하여 전진 여부 판단
- 시도 횟수마다 실행 결과 출력
- 우승자 판단

# 🔍 구현 상세 설명

- class RacingCar

  - name: 자동차 이름
  - moveCount: 전진한 횟수
  - moveOrStay(): 랜덤값 생성하여 전진 여부 결정

- class App

  - play(): 게임 플레이

  ***

  - makeNamesInputIntoCarArray(): 사용자에게 자동차 이름을 입력 받아 RacingCar 객체 배열 생성
  - makeStringIntoNameArray(): 문자열로 입력 받은 이름들을 쉼표(,)로 잘라서 이름 배열 생성
  - validateNameArray(): 이름 배열의 에러 검증(중복 체크)
  - validateEachName(): 이름 배열이 각 원소(이름)의 에러 검증(공백 유무, 길이 제한)

  ***

  - getGameChanceInput(): 사용자에게 시도 횟수(문자열) 입력 받아 정수로 변환 및 에러 검증(숫자인지 확인)
  - executeAllRounds(): 자동차 경주 게임의 전체 라운드 실행
  - executeEachRound(): 자동차 경주 게임의 각 라운드 실행
  - printRoundResult(): 각 라운드 실행 결과 출력

  ***

  - printWinner(): 최종 우승자 출력
  - findWinner(): 우승자 찾기 - 각 자동차의 moveCount의 최댓값과 moveCount가 같은 자동차의 이름을 배열로 리턴
