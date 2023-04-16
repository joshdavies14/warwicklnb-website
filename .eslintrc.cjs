/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
    root: true,
    extends: [
        'plugin:vue/vue3-essential',
        'eslint:recommended',
        '@vue/eslint-config-typescript',
    ],
    overrides: [
        {
            files: ['cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}'],
            extends: ['plugin:cypress/recommended'],
        },
    ],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        'eol-last': ['error', 'always'],
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
            },
        ],
        'linebreak-style': ['error', 'unix'],
        'max-len': ['off'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-plusplus': [
            'error',
            {
                allowForLoopAfterthoughts: true,
            },
        ],
        'vue/html-indent': ['error', 4],
        'vue/max-attributes-per-line': ['off'],
        'vue/multi-word-component-names': ['off'],
        'vue/no-v-html': ['off'],
        'no-restricted-syntax': ['off'],
        'vue/no-reserved-component-names': ['off'],
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'never',
                    component: 'never',
                },
                svg: 'never',
                math: 'never',
            },
        ],
        'import/extensions': ['off'],
        'import/prefer-default-export': ['off'],
    },
};
