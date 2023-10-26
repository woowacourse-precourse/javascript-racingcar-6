## 구현할 기능 목록

[ControllerMain-0]  
- gamestart & [ViewInput0] 호출

[ViewInput0]  
- 경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)  
	-> 경주할 자동차 이름 받기 

[ControllerMain-1]  
- 받아온 자동차 이름을 모델로 전송 

[ModelPlayer0]
- #players 배열 생성 후 받아온 자동차 이름을 split해서 저장
- #playersPosition 객체생성

[ControllerMain-2]
- [ViewInput1] 호출

[ViewInput1]
- 시도할 횟수는 몇 회인가요  
	-> fullTrackCount 입력 받기

[ControllerMain-3]
- [ModelTrack1]로 track_count 전송
- [ControllerTrack-0] 자식 class 호출

[ModelTrack1]
- #currentTrackCount = 0 초기화
- #fullTrackCount 저장

[ControllerTrack-0]
- currentTrackCount++ 하여 [ModelTrack]에 저장
- ModelPlayer 내의 getPlayerPostion 을 호출
- [OuputView] 호출하여 #playerPosiotn 결과 출력
- 다음 currentTrackPosition 이 fullTrackPosition이 될때까지 진행

[ModelPlayer1]
- utils의 [movePlayerPosition] 을 활용하여 [getPlayerPosition]
