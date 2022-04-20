module.exports = function () {
    return {
        files: [
            'config.js',
            'src/**/*.js',
            'tests/json/**/*',
        ],

        tests: [
            'tests/unit/**/*spec.js'
        ],
        testFramework: 'mocha',
        setup: function () {
            global.expect = require('chai').expect;
        },
        env: {
            type: 'node',
            runner: 'node'
        }
    };

};