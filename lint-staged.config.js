module.exports = {
  '*.{js,jsx,ts,tsx,html,json,md,mdx,yml,yaml}': ['prettier --cache --write'],
  '*.css': ['prettier --cache --write', 'stylelint'],
};
