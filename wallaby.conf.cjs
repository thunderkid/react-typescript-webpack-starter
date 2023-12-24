module.exports = function (wallaby) {
    return {
        files: [
            'src/**/*.ts', // Adjust the path to include your source files
            'package.json', // Include package.json for module resolution
            // Exclude test files
            { pattern: 'tests/**/*.spec.ts', ignore: true }
        ],

        tests: [
            'tests/**/*.spec.ts' // Adjust the pattern to your test files
        ],

        env: {
            type: 'node',
            runner: 'node',
            params: {
                runner: '--experimental-vm-modules --no-warnings' // Required for ESM
            }
        },

        testFramework: 'mocha',

        compilers: {
            '**/*.ts?(x)': wallaby.compilers.typeScript({
                //module: 'ESNext', // Use ESNext for ESM support
                target: 'es2021'  // Target can be adjusted as necessary
            })
        },

        setup: function (wallaby) {
            const mocha = wallaby.testFramework;
            mocha.ui('bdd');
        },

        debug: true // Optional: Enable if you need to debug Wallaby issues
    };
};
