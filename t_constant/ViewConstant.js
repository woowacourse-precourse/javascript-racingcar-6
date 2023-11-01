const GAME_END_MESSAGE = '최종 우승자 : ';

const DivideCarName = [
    { input: "pobi,woni", expected: ["pobi", "woni"] },
    { input: "alice,bob", expected: ["alice", "bob"] },
    { input: "123", expected: ["123"] },
    { input: "", expected: [""] }
];

const TransDistanceToHyphen = [
    { input: 3, expected: "---" },
    { input: 0, expected: "" },
    { input: 7, expected: "-------" },
    { input: 1.2, expected: "-" },
    { input: undefined, expected: "" },
    { input: null, expected: "" },
    { input: 'a', expected: "" },
]

const TransOutputFormDistance = [
    { carName: "3", distance: "---" },
    { carName: 0, distance: "" },
    { carName: 7, distance: "-------" },
    { carName: 1.2, distance: "-" },
    { carName: undefined, distance: "" },
    { carName: null, distance: "" },
    { carName: 'a', distance: "" },
]

const TransOutputFormWinner = [
    {input: ["test1", "test2", "test3"], expected: "test1, test2, test3"}, 
    {input: ["a", "b", "c"], expected: "a, b, c"},
    {input: ["123", "", null], expected: "test1, test2, test3"},
]
const CheckCarNameSuccess = [
    {output: ["test1", "test2", "test3"]},
    {output: ["test1", "test2"]},
    {output: ["123"]},
    {output: ["123", "최성락"]},
]

const CheckCarNameFail = [
    {output: [""]},
    {output: ["ttttttt"]},
    {output: ["test1 "]},
    {output: null},
    {output: undefined},
    {output: 1234},
    {output: ["$$"]},
]

const CheckRepeatCountSuccess = [
    {output: "123"},
    {output: "1"},
]

const CheckRepeatCountFail = [
    {output: ""},
    {output: "ttttttt"},
    {output: "test1 "},
    {output: null},
    {output: undefined},
    {output: 1234},
    {output: "$$"},
]

const InputView = [
    { input: "0", expected: "0" },
	{ input: "1", expected: "1" },
	{ input: "2", expected: "2" },
	{ input: "abc", expected: "abc" },
	{ input: undefined , expected: undefined },
	{ input: "", expected: "" }
];


export default {
    DivideCarName,
    TransDistanceToHyphen,
    TransOutputFormDistance,
    TransOutputFormWinner,
    CheckCarNameSuccess,
    CheckCarNameFail,
    CheckRepeatCountSuccess,
    CheckRepeatCountFail,
    InputView,
    GAME_END_MESSAGE,
};