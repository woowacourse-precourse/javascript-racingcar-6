export default function makeOneSentence(...arg) {
  const sentence = [...arg].join('');
  return sentence;
}
