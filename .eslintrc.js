module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['plugin:react/recommended', 'airbnb-typescript', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
    project: './tsconfig.json',
    tsconfigRootDir: '.',
  },
  plugins: ['react', 'react-hooks', '@typescript-eslint', "prettier"],
  settings: {
    'import/resolver': {
      webpack: {
        config: './build/webpack.base.js',
      },
    },
  },
  rules: {
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-console': 'off',
    'import/order': 'off',
    'import/extensions': 'off',
    'no-use-before-define': 'off',
    '@typescript-eslint/semi': 'off',
    'implicit-arrow-linebreak': 'off',
    'prettier/prettier': 'error',
  },
}
