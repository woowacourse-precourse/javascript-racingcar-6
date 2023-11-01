import { Console } from '@woowacourse/mission-utils';

const makeResultStr = (resultStr, item, maxScore) => {
  if (item[1] == maxScore) {
    if (resultStr === '') resultStr += item[0];
    else resultStr += ', ' + item[0];
  }
  return resultStr;
};

const chooseWinner = (carNameDict) => {
  const sortCarNameDict = [];

  for (let name in carNameDict) {
    sortCarNameDict.push([name, carNameDict[name]]);
  }

  sortCarNameDict.sort(function (a, b) {
    return b[1] - a[1];
  });

  let resultStr = '';
  const maxScore = sortCarNameDict[0][1];

  sortCarNameDict.forEach((item) => {
    resultStr = makeResultStr(resultStr, item, maxScore);
  });

  Console.print('최종 우승자 : ' + resultStr);
};

export { chooseWinner };
