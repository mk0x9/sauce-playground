module.exports = function(config) {
  config.set({
    port: 9876,
    autoWatch: true,
    basePath: '',
    files: [
      'main.js',
      'node_modules/jstest/jstest.js',
      'test.js'
    ],
    browsers: ['Chrome']
  });
};
