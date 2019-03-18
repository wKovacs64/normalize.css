module.exports = {
  '*.{html,js,json,md,yml,yaml}': ['prettier --write', 'git add'],
  '*.css': ['prettier --write', 'stylelint', 'git add'],
};
