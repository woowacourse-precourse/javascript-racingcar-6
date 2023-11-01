function generateResultTemplate(racecarNames) {
  const template = racecarNames.reduce((acc, cur) => {
    acc.push(`${cur} : `);
    return acc;
  }, []);

  return template;
}

export default generateResultTemplate;
