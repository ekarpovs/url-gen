module.exports = {
	globals: {
		'ts-jest': {
			tsConfig: 'tsconfig.test.json'
		}
	},
	moduleFileExtensions: [
		'ts',
		'js'
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest'
	},
	testMatch: [
		'**/test/**/*.test.(ts|js)',
		'**/src/**/*.test.(ts|js)',
	],
	testEnvironment: 'node'
};