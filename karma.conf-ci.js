module.exports = function(config) {

  var customLaunchers = {
    SL_IE6: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '6.0',
      platform: 'Windows XP'
    },
    SL_IE7: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '7.0',
      platform: 'Windows XP'
    },
    SL_IE8: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '8.0',
      platform: 'Windows 7'
    },
    SL_IE9: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '9.0',
      platform: 'Windows 7'
    },
    SL_IE10: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '10.0',
      platform: 'Windows 8'
    },
    SL_IE11: {
      base: 'SauceLabs',
      browserName: 'internet explorer',
      version: '11.0',
      platform: 'Windows 10'
    },
    Firefox: {
      base: 'SauceLabs',
      browserName: 'firefox',
      version: '39.0',
      platform: 'Linux'
    },
    Opera: {
      base: 'SauceLabs',
      browserName: 'opera',
      version: '12.15',
      platform: 'Linux'
    },
    Safari: {
      base: 'SauceLabs',
      browserName: 'safari',
      version: '8.0',
      platform: 'OS X 10.10'
    },
    iOS_Safari: {
      base: 'SauceLabs',
      browserName: 'iphone',
      platform: 'OS X 10.10',
      version: '9.0',
      deviceName: 'iPhone Simulator',
      deviceOrientation: 'portrait'
    },
    Android: {
      base: 'SauceLabs',
      browserName: 'android',
      version: '4.2',
      platform: 'Linux',
      deviceName: 'Android Emulator',
      deviceOrientation: 'portrait'
    }
  };

  config.set({
    port: 9876,
    autoWatch: true,
    basePath: '',
    reporters: ['dots', 'saucelabs'],
    files: [
      'main.js',
      'node_modules/jstest/jstest.js',
      'test.js'
    ],
    sauceLabs: {
      testName: 'sauce-playground'
    },
    captureTimeout: 240000,
    customLaunchers: customLaunchers,
    browsers: Object.keys(customLaunchers),
    singleRun: true
  });
};
