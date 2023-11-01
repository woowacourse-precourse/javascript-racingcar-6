# 구현할 기능 목록

- [x] input car name (자동차 이름 입력)
- [x] split car name (입력 받은 자동차 이름 구분)
- [x] validate car name (자동차 이름 validate)
- [x] input movement count (이동 횟수 입력)
- [x] get random value until end (경기 종료 전까지 랜덤 값 get)
  - [x] advance of game (전진)
  - [x] end of game (게임 종료)
- [x] print racing game result (경주 실행 결과 출력)
- [x] separate multiple winners (우승자 구분)
- [x] handle exception (예외 처리)

## 기능 요구사항 정리

초간단 자동차 경주 게임

- n 대의 자동차 전진 or 멈춤
- 각 자동차에 이름 부여 (쉼표 구분 + 5자 이하)
- 몇 번 이동할지 입력
- 전진 조건 : 0 ~ 9 사이 + 4 이상 값 (Random)
- 우승자 출력 (1명 이상 + 쉼표 구분)
- 잘못된 값 입력 : `throw`문
