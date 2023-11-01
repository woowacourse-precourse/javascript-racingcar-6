import { Console } from "@woowacourse/mission-utils";
import GameSetup from "../src/GameSetup";
import { CustomError } from "../src/Error";

jest.mock('@woowacourse/mission-utils', () => ({
    Console: {
        readLineAsync: jest.fn(),
    },
    CustomError: jest.fn(),
}));

describe('GameSetup', () => {
    afterEach(() => {
        jest.restoreAllMocks();
    });

    describe('getPlayerCarsInput 테스트', () => {
        test('유효성 검사 성공 시 플레이어의 입력 반환', async () => {
            const carNames = 'pobi,juni,gabi';
    
            Console.readLineAsync.mockResolvedValue(carNames);
    
            const result = await GameSetup.getPlayerCarsInput();
    
            expect(result).toEqual(['pobi', 'juni', 'gabi']);
        });
    
        test('유효성 검사 실패 시 CustomError throw', async () => {
            const invalidCarNames = 'Car1, Car2, Car3, Car$Invalid';
    
            Console.readLineAsync.mockResolvedValue(invalidCarNames);
    
            await expect(GameSetup.getPlayerCarsInput()).rejects.toThrow(CustomError)
        });
    });
    
    describe('createPlayersData 테스트', () => {
        test('플레이어 정보 생성 후 반환', () => {
            const raceEntry = ['pobi', 'juni', 'gabi'];
    
            const result = GameSetup.createPlayerData(raceEntry);
    
            expect(result).toEqual([
                {playerName: 'pobi', trackLocation: ''},
                {playerName: 'juni', trackLocation: ''},
                {playerName: 'gabi', trackLocation: ''},
            ]);
        });
    });
    describe('getPlayerTryNumberInput 테스트', () => {
        test('유효성 검사 성공 시 플레이어의 입력 반환', async () => {
            const tryNumberInput = '5';
    
            Console.readLineAsync.mockResolvedValue(tryNumberInput);
    
            const result = await GameSetup.getPlayerTryNumberInput();
    
            expect(result).toEqual(5);
        });
        test('유효성 검사 실패 시 CutsomError throw', async() => {
            const InvalidTryNumber = 'five';
    
            Console.readLineAsync.mockResolvedValue(InvalidTryNumber);
    
            await expect(GameSetup.getPlayerTryNumberInput()).rejects.toThrow(
                CustomError,
            );
        });
    });
});