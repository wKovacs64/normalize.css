module.exports = {
  '*.{html,js,json,md,yml,yaml}': ['prettier --write'],
  '*.css': ['prettier --write', 'stylelint'],
};
