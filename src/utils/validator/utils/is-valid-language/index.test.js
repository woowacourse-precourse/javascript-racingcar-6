import { LANGUAGE_OPTION } from '../../../../constants/System.js';
import isValidLanguage from './index.js';

describe('isValidLanguage', () => {
  it('영어와 한국어만 포함되어 있으면 true', () => {
    const input = ['안녕', 'Hello', '안녕하세요', '닉네임', '도mi'];

    const result = isValidLanguage(input, LANGUAGE_OPTION);
    expect(result).toBe(true);
  });

  test('영어와 한국어외에 포함되어있으면 false', () => {
    const input = ['안녕!', 'Ho123', '안녕!!', '닉네임!'];

    const result = isValidLanguage(input, LANGUAGE_OPTION);
    expect(result).toBe(false);
  });
});
