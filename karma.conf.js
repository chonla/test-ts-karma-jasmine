module.exports = function(config) {
    config.set({
        basePath: './',
        frameworks: ['jasmine', 'karma-typescript'],
        browsers: ['PhantomJS'],
        port: 9999,
        singleRun: true,
        noResolve: false,
        reporters: ['dots', 'karma-typescript'],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        files: [
            'src/**/*.ts',
            'tests/unit/*.ts'
        ]
    })
};
