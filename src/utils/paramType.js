/**
 * default parameter가 이전 매개변수를 참조할 수 있는 기능을 사용해
 * TypeScript와 같이 parameter에 특정 타입만 들어올 수 있게 만들어줍니다.
 * @link https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Functions/Default_parameters
 * @warning : null과 undefined는 생성자가 없기에 원시타입을 넣어주세요 !
 * @param {*} target : 검증하고자 하는 value
 * @typedef {'String' | 'Number' | 'undefined' | 'null'} PrimitiveConstructorType
 * @typedef {'Object' | 'Array' | 'Function'} ReferenceConstructorType
 * @param {PrimitiveConstructorType | undefined | null | ReferenceConstructorType | Class} type - target의 타입 또는 생성자 함수
 * @returns {undefined}
 * @throws {Error}
 * @example
 * class WooTeCo {}
 * const foo (param, _0 = paramType(param, WooTeCo)) => {} // WooTeCo
 * foo('학생 왕돈까스 먹어') // Error (WooTeCo 형이 들어와야하는데 string 타입이 옴)
 */
export const paramType = (target, type) => {
  if (type === undefined || type === null) {
    if (target !== type) {
      throw new Error(
        `[ERROR] target : ${target}은 (${type}) 타입이 아닙니다 !`
      );
    }
  }

  if (target.constructor !== type) {
    throw new Error(
      `[ERROR] target : ${target}은 (${type.constructor.name}) 타입이 아닙니다 !`
    );
  }
};
