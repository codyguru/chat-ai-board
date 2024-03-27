module.exports = {
  '*.{ts,tsx,scss}': ['prettier . --write'],
  '*.{ts,tsx}': [
    'eslint . --cache --fix --ext .tsx --ext .ts',
    () => 'yarn tsc',
    () => 'yarn vitest run',
  ],
};
