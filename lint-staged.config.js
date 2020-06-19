module.exports = {
  '*.{js,jsx,ts,tsx,html,json,md,mdx,yml,yaml}': ['prettier --write'],
  '*.css': ['prettier --write', 'stylelint'],
};
