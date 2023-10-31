import { Race } from '../src/CarRace.js';


describe('Race 클래스', () => {
    describe('getWinners 메서드', () => {
        test('단독 우승자', () => {
            const race = new Race(['pobi', 'woni', 'jun']);
            race.cars[0].foward = 3; // pobi의 위치를 3으로 설정
            race.cars[1].foward = 2; // woni의 위치를 2로 설정
            race.cars[2].foward = 1; // jun의 위치를 1로 설정

            const winners = race.getWinners();
            expect(winners).toEqual(['pobi']);
        });

        test('공동 우승자', () => {
            const race = new Race(['pobi', 'woni', 'jun']);
            race.cars[0].foward = 3; // pobi의 위치를 3으로 설정
            race.cars[1].foward = 3; // woni의 위치를 3으로 설정
            race.cars[2].foward = 2; // jun의 위치를 2로 설정

            const winners = race.getWinners();
            expect(winners).toEqual(['pobi', 'woni']);
        });
    });
});
