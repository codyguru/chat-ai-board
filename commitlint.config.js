module.exports = {
  extends: ['@commitlint/config-conventional'],
  rules: {
    'subject-empty': [1, 'never'],
    'type-empty': [1, 'never'],
  },
};
