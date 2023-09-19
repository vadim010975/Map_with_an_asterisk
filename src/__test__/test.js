const { Settings } = require('../Settings');

test('test class Settings', () => {
  const expected = new Map([
    ['theme', 'gray'],
    ['music', 'rock'],
    ['difficulty', 'normal'],
  ]);
  expect(Settings.settings).toEqual(expected);
});
