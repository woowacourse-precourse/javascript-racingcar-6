import { ReferenceTypeError } from '../../src/errors/ParamTypeError.js';
import { paramType } from '../../src/utils/paramType.js';

describe('function paramType Test', () => {
  class WooTeCo {
    constructor() {}
  }
  class FreeCourse extends WooTeCo {
    constructor() {
      super();
    }
  }
  const string = '학생 왕돈까스 먹어';
  const number = 4885;
  const boolean = true;
  const array = ['다들', '점심', '먹고', '와요오옼!!'];
  const obj = { name: '현영', age: 2 };
  const wooTeCoInstance = new WooTeCo();
  const subClassInstance = new FreeCourse();
  const createRandomNumber = () => {};

  const testCases = [
    {
      type: 'string',
      invalidValues: [
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        createRandomNumber,
        wooTeCoInstance,
      ],
    },
    {
      type: 'number',
      invalidValues: [
        string,
        boolean,
        undefined,
        null,
        array,
        obj,
        createRandomNumber,
        wooTeCoInstance,
      ],
    },
    {
      type: 'boolean',
      invalidValues: [
        string,
        number,
        undefined,
        null,
        array,
        obj,
        createRandomNumber,
        wooTeCoInstance,
      ],
    },
    {
      type: Array,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        obj,
        createRandomNumber,
        wooTeCoInstance,
      ],
    },
    {
      type: Object,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        createRandomNumber,
        wooTeCoInstance,
      ],
    },
    {
      type: Function,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        wooTeCoInstance,
        subClassInstance,
      ],
    },
    {
      type: WooTeCo,
      invalidValues: [
        string,
        number,
        boolean,
        undefined,
        null,
        array,
        obj,
        createRandomNumber,
      ],
    },
  ];

  testCases.forEach(({ type, invalidValues }, idx) => {
    test(`parameter의 type이 ${type.name}인데 parameter에 다른게(${invalidValues[idx]}) 들어왔을때 throw Error 테스트`, () => {
      invalidValues.forEach((value) => {
        const foo = (param, _0 = paramType(param, type)) => {};
        expect(() => foo(value)).toThrow();
      });
    });
  });

  test('parameter의 타입이 sub class인데 Super Class로 검사했을때 not throw Error', () => {
    const foo = (param, _0 = paramType(param, WooTeCo)) => {};
    const subInstance = new FreeCourse();

    expect(() => foo(subInstance)).not.toThrow(ReferenceTypeError);
  });

  test('parameter의 타입이 super class인데 sub Class로 검사했을때 throw Error', () => {
    const foo = (param, _0 = paramType(param, FreeCourse)) => {};
    const superInstance = new WooTeCo();

    expect(() => foo(superInstance)).toThrow(ReferenceTypeError);
  });

  test.failing(
    'parameter의 타입이 super Class를 sub Class로 검사했을떄 실패 test',
    () => {
      const foo = (param, _0 = paramType(param, FreeCourse)) => {};

      expect(() => foo(wooTeCoInstance)).not.toThrow(ReferenceTypeError);
    }
  );
});
