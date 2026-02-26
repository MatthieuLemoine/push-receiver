const tsPlugin = require('@typescript-eslint/eslint-plugin')
const js = require('@eslint/js')

module.exports = [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            'src/protos.js',
            'src/protos.d.ts',
            'coverage/**',
            'web/**',
            '.esm-cache/**',
        ],
    },
    js.configs.recommended,
    ...tsPlugin.configs['flat/recommended'],
    {
        rules: {
            '@typescript-eslint/no-explicit-any': 'off',
            '@typescript-eslint/no-duplicate-enum-values': 'off',
        },
    },
]
