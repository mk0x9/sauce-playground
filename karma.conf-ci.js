var _ = require('lodash');

module.exports = function(config) {

  var CHROME = ['dev', 'beta', '44.0', '43.0', '42.0'],
      FIREFOX = ['dev', 'beta', '39.0', '38.0', '37.0'],
      chromeFirefox = [ { browser: 'chrome', versions: CHROME },
                        { browser: 'firefox', versions: FIREFOX } ];

  var arr = _.flattenDeep(
    [
      { system: 'winXP',
        sets: [
          { browser: 'ie',
            versions: ['8.0'] },
          { browser: 'opera',
            versions: ['12.12'] }
        ].concat(chromeFirefox)},
      { system: 'win7',
        sets: [
          { browser: 'ie',
            versions: ['8.0', '9.0', '10.0', '11.0'] },
          { browser: 'safari',
            versions: ['5.1'] },
          { browser: 'opera',
            versions: ['12.12'] }
        ].concat(chromeFirefox)},
      { system: 'win8',
        sets: [
          { browser: 'ie',
            versions: ['10.0'] },
        ].concat(chromeFirefox)},
      { system: 'win8.1',
        sets: [
          { browser: 'ie',
            versions: ['11.0'] },
        ].concat(chromeFirefox)},
      { system: 'win10',
        sets: [
          { browser: 'ie',
            versions: ['11.0'] },
        ].concat(chromeFirefox)},
      { system: 'Linux',
        sets: [
          { browser: 'opera',
            versions: ['12.15'] },
          { browser: 'android',
            versions: ['4.0', '4.1', '4.2', '4.3', '4.4', '5.1'],
            deviceName: 'Android Emulator',
            deviceOrientation: 'portrait' },
        ].concat(chromeFirefox)},
      { system: 'OSX10.8',
        sets: [
          { browser: 'safari',
            versions: ['6.0'] }
        ].concat(chromeFirefox)},
      { system: 'OSX10.9',
        sets: [
          { browser: 'safari',
            versions: ['7.0'] }
        ].concat(chromeFirefox)},
      { system: 'OSX10.10',
        sets: [
          { browser: 'safari',
            versions: ['8.0'] },
          { browser: 'iphone',
            versions: ['5.1', '6.0', '6.1', '7.0', '7.1', '8.0', '8.1', '8.2', '8.3', '8.4', '9.0'],
            deviceName: 'iPhone Simulator',
            deviceOrientation: 'portrait' }
        ].concat(chromeFirefox)},
      { system: 'OSX10.11',
        sets: [
          { browser: 'safari',
            versions: ['8.1'] }
        ].concat(chromeFirefox)}
    ].map(function(it) {
      return it.sets.map(function(set) {
        return set.versions.map(function(version) {
          var platform = it.system;
          switch (true) {
          case /^win/.test(platform):
            platform = platform.replace(/^win/, 'Windows ');
            break;
          case /^OSX/.test(platform):
            platform = platform.replace(/^OSX/, 'OS X ');
            break;
          }
          var res = {};
          ['deviceName', 'deviceOrientation'].forEach(function(prop) {
            if (prop in set) {
              res[prop] = set[prop];
            }
          });
          return _.extend(res, {
            base: 'SauceLabs',
            browserName: (set.browser === 'ie' ? 'internet explorer' : set.browser),
            version: version,
            platform: platform
          });
        });
      });
    })
  );

  var customLaunchers = {};

  arr.forEach(function(conf) {
    customLaunchers[conf.platform + ' ' + conf.browserName + '-' + conf.version] = conf;
  });

  config.set({
    port: 9876,
    autoWatch: true,
    basePath: '',
    frameworks: ['jasmine'],
    reporters: ['dots', 'saucelabs'],
    files: [
      'main.js',
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
