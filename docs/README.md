# 기능 구현 사항 🧎 

## 게임의 흐름 🌀

1. 게임을 시작
2. 경주 할 자동차의 이름을 플레이어로부터 입력받기 : getPlayerCarsInput
3. 유효성 검사를 진행. 실패할 경우 오류 발생 : isPlayerCarNameValidated
4. 경주 시도 횟수를 플레이어로부터 입력받기 : getPlayerTryNumberInput
5. 유효성 검사를 진행. 실패할 경우 오류 발생 : isPlayerTryNumberValidated
6. 경주를 시작 : startRace

   a. 무작위 숫자 뽑고 전진 여부를 확인. 생성된 숫자>=4 일 경우 true, 아닐 경우 false : shouldCarMoveForward

   
   b. 전진 할 경우, 각 플레이어의 진행률 기록하기 : addCarMoveProgressBar

   
   c. 매 차례마다 전진 바를 각 차량마다 진행상황에 추가하기 : addCarMoveProgressBar
7. 경주 종료

     a. 경주 종료 후, 우승자 확인 : checkWinners

   
       a-1. 플레이어의 진행 상황을 확인 : checkWinners

   
       a-2. 첫 실행 시에는 '실행 결과' 문자열 출력 : printRaceStatus


     b. 최종 우승자 출력(여러 명일 경우 쉼표를 이용하여 구분) : printWinners
   

       b-1. 최종 우승자는 문자열로 출력

   
       b-2. 최종 우승자>=2 , 해당하는 플레이어의 자동차 이름을 모두 출력


9. 프로그램 종료
