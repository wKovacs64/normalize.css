module.exports = {
  '*.{html,css,json,md,mdx,yml,yaml}': ['prettier --write'],
  '*.css': ['prettier --write', 'stylelint'],
};
