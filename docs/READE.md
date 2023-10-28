# Big Sketch

- constants 폴더 : 화면에 출력될 상수 메세지 모음

- error 폴더 : 올바르지 않은 사용자 입력에 대한 에러발생 총괄

- util 폴더 : 

  1. RandomArrayGenerator.js
    input : n
    output : 길이가 n인 랜덤배열

  2. Accumulator.js
    function1 = (랜덤배열, RunningDistance배열) => 누적 RunningDistance배열 
    function2 = (랜덤배열, Score배열) => 누적 Score배열

  3. ScoreConverter.js
    input : 랜덤배열
    output : 랜덤배열의 각 원소를 다음과 같은 규칙으로 치환하여 새로운 배열을 반환한다
    0~3 : 0으로 치환
    4~9 : 1로 치환
      

- controller 폴더 :
  
  RacingGame : 게임결과 계산 및 출력(중앙통제)

# Small Sketch

## Exception 


### - 쉼표 예외상황 정리
  1. 연속되는 쉼표만 있는경우 pobi,,crong   
  2. 맨앞에 쉼표만 있는경우 ,pobi
  3. 맨뒤에 쉼표만 있는경우 pobi,
  4. 맨앞 맨뒤 모두에 쉼표가 있는 경우 ,pboi,
  5. 연속되는 쉼표 & 맨앞 또는 맨뒤에 쉼표가 있는경우 ,pobi,,crong or pobi,,crong,
--> 쉼표의 사용이 잘못되었습니다. 쉼표를 다시한번 확인해주세요.


### - 싱글 자동차 예외상황 정리
  1. 자동차 한대만 기입한 경우        
--> 게임을 시작하기 위해선 2대 이상의 자동차가 필요합니다.

      
### - 6글자 이상의 이름을 포함 
  pobi,crong,christmas       
--> 자동차의 이름은 최대 5글자까지 가능합니다.

### 예외의 중복
  1. 쉼표 + single :           
  - pobi, or ,pobi or pobi,, or ,pobi, or ,,pobi,       
  - [쉼표의 사용이 잘못되었습니다.]   
  - [게임을 시작하기 위해선 2대 이상의 자동차가 필요합니다.]

  2. 쉼표 + 6글자 :       
  ,corngboi, ticokqerg,,uresdbbgb,        
  - [쉼표의 사용이 잘못되었습니다. 쉼표를 다시한번 확인해주세요]    
  - [자동차의 이름은 최대 5글자까지 가능합니다.]     
  - [글자수 초과 자동차 리스트]       

  3. single + 6글자    
  - leechanwoong          
  - [게임을 시작하기 위해선 2대 이상의 자동차가 필요합니다.]    
  - [자동차의 이름은 최대 5글자까지 가능합니다.]       

  


### step1 ~ step3 에서 문제가 없다면 계산기로 보내기
