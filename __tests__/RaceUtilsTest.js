import { Console, Random } from "@woowacourse/mission-utils";
import RaceUtils from "../src/RaceUtils";
import { CONSTANTS } from "../src/Constants";

jest.mock('@woowacourse/misiion-utils', () => ({
    Random: {
        pickNumberInRange: jest.fn(),
    },
    Console: {
        print: jest.fn(),
    },
}));

describe('RaceUtils', () => {
    describe('shouldMoveForward 테스트', () => {
        test('IS_FORWARD보다 큰 숫자를 뽑았을 경우 true 반환', () => {
            Random.pickNumberInRange.mockReturnValue(CONSTANTS.IS_FORWARD);

            const result = RaceUtils.shouldMoveForward();

            expect(result).toBe(true);
        });
        test('IS_FORWARD보다 작은 숫자를 뽑았을 경우 false 반환', () => {
            Random.pickNumberInRange.mockReturnValue(CONSTANTS.IS_FORWARD - 1);

            const result = RaceUtils.shouldMoveForward();

            expect(result).toBe(false);
        });
    });

    describe('moveCarForward 테스트', () => {
        test('player 인자가 전달되었을 때 trackLocaation 업데이트 후 객체 반환', () => {
            const player = { playerName: 'John', trackLocation: ''};
            const expectedPlayer = {playerName : 'John', trackLocation:'-'};

            const result = RaceUtils.moveCarForWard(player);

            expect(result).toEqual(expectedPlayer);
        });
    });

    describe('findWinners 테스트', () => {
        test('trackLocation의 길이가 가장 긴 playerName 반환', () => {
            const playersData = [
                {playerName : 'pobi', trackLocation: '---'},
                {playerName : 'juni', trackLocation: '----'},
                {playerName : 'woni', trackLocation: '-----'},
            ];
            const expectedWinners = ['woni'];

            const result = RaceUtils.findWinners(playersData);

            expect(result).toEqual(expectedWinners);
        });
    });

    describe('announceWinners 테스트', () => {
        test('게임 종료 문구와 최종 우승자 출력', () => {
          const winners = ['pobi'];
          const expectedMessage = '최종 우승자 : pobi';
    
          RaceUtils.announceWinners(winners);
    
          expect(Console.print).toHaveBeenCalledWith(expectedMessage);
        });
      });
    
    describe('proceedEachRaceTurn 테스트', () => {
        test('움직여야 하는 플레이어가 움직였는지 확인', () => {
          RaceUtils.shouldMoveForward = jest.fn().mockReturnValue(true);
          const player1 = { playerName: 'pobi', trackLocation: '' };
          const player2 = { playerName: 'woni', trackLocation: '' };
          const playersData = [player1, player2];
    
          const result = RaceUtils.proceedEachRaceTurn(playersData);
    
          expect(result[0].trackLocation).not.toBe(player1.trackLocation);
          expect(result[1].trackLocation).not.toBe(player2.trackLocation);
          RaceUtils.shouldMoveForward.mockRestore();
        });
    
        test('움직이면 안되는 플레이어가 움직이지 않았는지 확인', () => {
          RaceUtils.shouldMoveForward = jest.fn().mockReturnValue(false);
          const player1 = { playerName: 'pobi', trackLocation: '' };
          const player2 = { playerName: 'woni', trackLocation: '' };
          const playersData = [player1, player2];
    
          const result = RaceUtils.proceedEachRaceTurn(playersData);
    
          expect(result[0].trackLocation).toBe(player1.trackLocation);
          expect(result[1].trackLocation).toBe(player2.trackLocation);
          RaceUtils.shouldMoveForward.mockRestore();
        });
      });
    
    describe('printRaceStatus 테스트', () => {
        it('should print the race status for each player', () => {
          const playersData = [
            { playerName: 'pobi', trackLocation: '--' },
            { playerName: 'woni', trackLocation: '----' },
          ];
          const expectedMessage = 'pobi : --\nwoni : ----\n';
    
          const consolePrintMock = jest.spyOn(Console, 'print');
          RaceUtils.printRaceStatus(playersData);
    
          expect(consolePrintMock).toHaveBeenCalledWith(expectedMessage);
          consolePrintMock.mockRestore();
        });
      });
});