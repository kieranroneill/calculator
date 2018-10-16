module.exports = {
    collectCoverage: true,
    collectCoverageFrom: [
        '<rootDir>/src/**/*.{ts,tsx}',
        '!<rootDir>/src/**/*.d.ts'
    ],
    coverageDirectory: 'coverage',
    globals: {
        'ts-jest': {
            tsConfig: 'tsconfig.test.json',
        },
    },
    moduleFileExtensions: [
        'js',
        'ts',
        'tsx'
    ],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '<rootDir>/test/mocks/fileMock.js',
    },
    rootDir: '..',
    roots: ['<rootDir>/src/'],
    setupTestFrameworkScriptFile: '<rootDir>/test/setup.js',
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    testEnvironment: 'node',
    testEnvironmentOptions: { userAgent: 'node.js', appName: 'Netscape', language: 'en' },
    testMatch: [
        '<rootDir>/src/**/?(*.)(test).(j|t)s?(x)'
    ],
    transform: {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.tsx?$': 'ts-jest',
    },
    verbose: true
};
