module.exports = {
  '*.{js,json,md,yml}': ['prettier --write', 'git add'],
  '*.css': ['prettier --write', 'stylelint', 'git add'],
};
