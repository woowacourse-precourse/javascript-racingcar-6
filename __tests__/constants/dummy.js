const DUMMY_INPUTS = Object.freeze({
  withoutNumber: [
    { input: '1' },
    { input: {} },
    { input: [] },
    { input: true },
    { input: null },
    { input: undefined },
  ],

  withoutString: [
    { input: 1 },
    { input: {} },
    { input: [] },
    { input: true },
    { input: null },
    { input: undefined },
  ],

  withoutArray: [
    { input: 1 },
    { input: '1' },
    { input: {} },
    { input: true },
    { input: null },
    { input: undefined },
  ],

  withoutBoolean: [
    { input: 1 },
    { input: '1' },
    { input: {} },
    { input: [] },
    { input: null },
    { input: undefined },
  ],

  withoutObject: [
    { input: 1 },
    { input: '1' },
    { input: [] },
    { input: true },
    { input: null },
    { input: undefined },
  ],
});

export default DUMMY_INPUTS;
