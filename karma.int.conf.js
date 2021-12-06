const path = require('path');

module.exports = function(config) {
  config.set({
    frameworks: ['jasmine', 'browserify'],
    files: [
      'c3.css',
      'spec/*-helper.js',
      'spec/interaction-spec.js'
    ],
    preprocessors: {
      'spec/*.js': ['browserify']
    },
    browserify: {
      debug: true,
      transform: [['babelify', { presets: ['@babel/preset-env'], plugins: ['istanbul'] }]]
    },
    reporters: ['spec', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      reports: ['html', 'lcovonly', 'text-summary']
    },
    autoWatch: true,
    browsers: ['Chrome'],
    singleRun: false,
    browserNoActivityTimeout: 120000,
  })
};
