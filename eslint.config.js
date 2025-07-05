import js from '@eslint/js';

export default [
    {
        ignores: [
            'node_modules/**',
            'dist/**',
            '.cache/**',
            '**/*.min.js',
            '**/*.min.css'
        ]
    },
    js.configs.recommended,
    {
        files: ['js/**/*.js'],
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: 'script',
            globals: {
                window: 'readonly',
                document: 'readonly',
                console: 'readonly',
                setTimeout: 'readonly',
                clearTimeout: 'readonly',
                setInterval: 'readonly',
                clearInterval: 'readonly',
                alert: 'readonly',
                fetch: 'readonly',
                FormData: 'readonly',
                URL: 'readonly',
                URLSearchParams: 'readonly'
            }
        },
        rules: {
            'indent': ['error', 4],
            'quotes': ['error', 'single'],
            'semi': ['error', 'always'],
            'no-unused-vars': 'warn',
            'no-console': 'off',
            'eqeqeq': 'error',
            'curly': 'error',
            'no-trailing-spaces': 'error',
            'comma-dangle': ['error', 'never'],
            'object-curly-spacing': ['error', 'always'],
            'array-bracket-spacing': ['error', 'never'],
            'space-before-function-paren': ['error', 'never'],
            'keyword-spacing': 'error',
            'space-infix-ops': 'error',
            'no-multiple-empty-lines': ['error', { 'max': 2 }],
            'eol-last': 'error'
        }
    }
];
