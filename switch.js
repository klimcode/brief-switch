module.exports = function briefSwitch(value, cases) {
  const lastIndex = cases.length - 1;
  for (let i = 0; i < lastIndex; i = i + 2) {
    if (value === cases[i]) return cases[i + 1];
  }
  return cases[lastIndex];
}
