import generateAdvanceConditions from './repeat/generateAdvanceConditions';
import updateResult from './repeat/updateResult';
import printUpdateResult from './repeat/printUpdateResult';

async function repeatProcess(attempts, template) {
  for (let i = 0; i < attempts; i++) {
    const advanceConditions = generateAdvanceConditions(template);

    template = updateResult(template, advanceConditions);

    printUpdateResult(template);
  }

  return template;
}

export default repeatProcess;
