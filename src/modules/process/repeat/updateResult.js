import { num } from '../../../Constants';

function updateResult(template, advanceConditions) {
  const updated = template.map((item, idx) =>
    advanceConditions[idx] >= num.ADVANCE_IF_GREATER_THAN ? (item += '-') : item
  );

  return updated;
}

export default updateResult;
