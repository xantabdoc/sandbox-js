const {defaults} = require('jest-config');
module.exports = {
    "verbose": true,
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx', 'js'],
    "transform": {
        "^.+\\.jsx?$": "babel-jest"
    },
    "transformIgnorePatterns": [
        "node_modules/(?!(@babel)/)"
    ],
    "coverageDirectory": "./coverage/",
    "collectCoverage": true
}
