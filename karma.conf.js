module.exports = function(config) {
  config.set({
    port: 9876,
    autoWatch: true,
    basePath: '',
    frameworks: ['jasmine'],
    files: [
      'main.js',
      'test.js'
    ],
    browsers: ['Chrome']
  });
};
