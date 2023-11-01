import { Console } from '@woowacourse/mission-utils';

export const Input = async (placeholder) => {
  const tab = `
  `;
  try {
    return await Console.readLineAsync(`${placeholder}${tab}`);
  } catch (e) {
    throw new Error(e);
  }
};
