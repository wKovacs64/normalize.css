// eslint-disable-next-line import/no-extraneous-dependencies
const prettierConfig = require('@wkovacs64/prettier-config');

module.exports = {
  ...prettierConfig,
  overrides: [
    {
      files: ['**/*.css'],
      options: {
        singleQuote: false,
      },
    },
  ],
};
