// Load data from package.json.
const { version } = require('./package.json');

// Create environment variables from sources it might be undesirable to expose
// at run time.
process.env.NODE_PACKAGE_VERSION = version;

module.exports = (api) => {
  api.cache.never();

  return {
    presets: ['@babel/preset-env'],
    plugins: [['module-extension', { mjs: '' }]],
  };
};
