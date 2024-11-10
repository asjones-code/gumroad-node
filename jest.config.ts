import type { JestConfigWithTsJest } from 'ts-jest';

const config: JestConfigWithTsJest = {
  preset: 'ts-jest/presets/default-esm',
  testEnvironment: 'node',
  transform: {
    '^.+\\.(t|j)sx?$': ['@swc/jest', { sourceMaps: 'inline' }],
  },
  moduleNameMapper: {
    '^gumroad-stainless$': '<rootDir>/src/index.ts',
    '^gumroad-stainless/_shims/auto/(.*)$': '<rootDir>/src/_shims/auto/$1-node',
    '^gumroad-stainless/(.*)$': '<rootDir>/src/$1',
  },
  modulePathIgnorePatterns: [
    '<rootDir>/ecosystem-tests/',
    '<rootDir>/dist/',
    '<rootDir>/deno/',
    '<rootDir>/deno_tests/',
  ],
  testPathIgnorePatterns: ['scripts'],
};

export default config;
