# 입력이 올바른지
    ## 실행할 round를 입력하라고 했는데 숫자가 아닌 다른 것을 입력했다면 'ERROR' throw

# 자동차 입력을 받고 파싱하는 함수
    쉼표로 구분된 자동차들의 이름을 받고 해당하는 이름을 가지는 자동차 클래스 생성
    자동차 클래스는 이름을 나타내는 name과 이동거리를 나타내는 location 가지고 있다
    자동차 클래스 만들어서 배열에 push

# 매 라운드 마다 자동차를 전진시킬지 말지 판단할 함수
    ## 자동차 클래스에 drive 함수
      MissionUtils.Random.pickNumberInRange(0, 9); 를 실행
      4 이상이면 location +1

# 자동차의 이동거리만큼 '_' 를 출력하는 함수 
    ## 자동차 클래스에 currentLocation 함수 
    location만큼 '-'를 출력 

# 우승자 판단하는 함수
    for 문으로 배열을 돌면서 가장 큰 location 탐색
    가장 큰 값을 top에 저장
    location === top 이면 winners 배열에 추가

    location > top 이면 winners 배열 초기화 후 새로 push
    top 도 현재 location 값으로 갱신

    
    
    

    