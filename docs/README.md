## :memo: 구현할 기능 목록 

# 경주할 자동차 이름을 입력받아 저장하는 기능 
 [ ] 경주할 자동차의 이름을 입력받는다.
 [ ] 입력 받은 이름을 racingCarMembers 배열에 저장한다.

# 시도 횟수를 입력받는 기능
 [ ] 시도 횟수 roundNumber를 입력받아 저장한다.

# 전진할 여부를 정하는 랜덤 값을 구하는 기능 : NumberGenerator.createRandomNumbers
 [ ] 전진할 여부를 결정할 랜덤값을 구한다.
 [ ] 랜덤값이 4 이상이라면 true를, 그렇지 않다면 false를 반환한다.

 ex - 3명의 참여자가 5라운드까지 진행한 결과
 [[false,true,true,true,false],[true,true,false,true,true],[false,false,false,true,true]]

# 실행 결과를 구하는 기능 : resultManager.countResults
 [ ] 특정 라운드까지 나온 true의 갯수를 반환한다.
 
# 가장 많이 전진한 자동차를 구하는 기능 : resultManager.selectWinner
 [ ] 각 자동차의 최종 라운드까지 나온 true의 갯수를 구한다.
 [ ] 숫자가 가장 높은 값을 반환한다.

# 예외처리
* 경주할 자동차 이름 관련
 - 이름의 입력이 문자열이 아닌경우
 - 이름이 5자 초과일 경우
 - 이름의 수가 10을 초과할 경우
 - 이름의 입력을 하지 않았을 경우
 - 중복된 이름을 입력하였을 경우

* 시도 횟수 관련
 - 시도 횟수가 1~10 까지의 자연수가 아닐 경우(소수 등 입력)
 - 시도 횟수가 20을 초과할 경우
 - 시도 횟수를 입력하지 않았을 경우