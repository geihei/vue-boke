module.exports = {
    "env": {
        "es6": true,
        "browser": true,
        "jquery": true,
    },
    "extends": require.resolve('we-build/eslint'),
    "globals": {
        "MOCK": false,
        "HISTORY_MODE": false,
        "ROUTE_BASE": false,
        "DEV": false,
        "DEV_API": false,
        "CODE_VERSION": false,
        "EDIT": false,
        "WeError": false,
    },
    rules: {
        "no-console": "off",
    }
}