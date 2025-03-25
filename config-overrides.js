const path = require('path');

module.exports = function override(config, env) {
  config.module.rules.forEach((rule) => {
    if (rule.oneOf) {
      rule.oneOf.forEach((loader) => {
        if (loader.test && loader.test.toString().includes('scss')) {
          loader.use.forEach((use) => {
            if (use.loader && use.loader.includes('sass-loader')) {
              use.options = {
                ...use.options,
                implementation: require('sass'),
                sassOptions: {
                  includePaths: [path.resolve(__dirname, 'src')],
                },
                // Suppress deprecation warnings
                warnRule: false,
              };
            }
          });
        }
      });
    }
  });

  return config;
};
