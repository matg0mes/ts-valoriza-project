module.exports = {
    preset: "ts-jest",
    testEnvironment: "node",
    moduleDirectories: ['node_modules', 'src'],
    moduleNameMapper: {
        "@app/(.*)": "<rootDir>/src/$1",
        "@config/(.*)": "<rootDir>/src/config/$1",
    },
};