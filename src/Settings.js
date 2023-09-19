class Settings {
  static defaultSettings = new Map([
    ['theme', 'dark'],
    ['music', 'trance'],
    ['difficulty', 'easy'],
  ]);

  static userSettings = new Map([
    ['theme', 'gray'],
    ['music', 'rock'],
    ['difficulty', 'normal'],
  ]);

  static get settings() {
    const copiedMap = new Map(this.defaultSettings);
    this.userSettings.forEach((value, key) => {
      copiedMap.set(key, value);
    });
    return copiedMap;
  }
}

module.exports = {
  Settings,
};
