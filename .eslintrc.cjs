module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint/eslint-plugin'],
    "overrides": [
        {
            "files": ["main.js"],
            "excludedFiles": ["main.js"]
        }
    ],
    extends: ['airbnb-base', 'airbnb-typescript/base', 'plugin:@typescript-eslint/recommended'],
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: './tsconfig.json',
    },
    rules: {
        'max-len': [2, { code: 180 }],
        'no-underscore-dangle': [2, { allowAfterThis: true }],
        'no-console': 'off',
        'padding-line-between-statements': [2, { blankLine: 'always', prev: '*', next: 'return' }],
        'import/prefer-default-export': 'off',
        'class-methods-use-this': 'off',
        'no-restricted-exports': 'off',
        'no-param-reassign': 'off',
        'import/no-absolute-path': 'off',
        'arrow-body-style': 'off',
        'no-multiple-empty-lines': ['error', { max: 2, maxEOF: 0 }],
        indent: 'off',
        '@typescript-eslint/indent': 'off',
        'linebreak-style': 'off',
    },
};
