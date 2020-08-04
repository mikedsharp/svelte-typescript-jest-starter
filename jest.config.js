module.exports = {
  moduleFileExtensions: ['ts', 'tsx', 'js', 'svelte'],
  transform: {
    '^.+\\.svelte$': [
      'svelte-jester',
      {
        preprocess: true,
      },
    ],
    '\\.(ts|tsx)$': 'ts-jest',
  },
  testRegex: '/src/.*\\.spec.(ts|tsx|js)$',
};
