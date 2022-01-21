module.exports = {
  'env': {
    browser: true,
    es2021: true,
  },
  'extends': ['plugin:react/recommended', 'google'],
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 13,
    sourceType: 'module',
  },
  'plugins': ['react', '@typescript-eslint'],
  'rules': {
    'react/react-in-jsx-scope': 'off',
    // allow jsx syntax in js files (for next.js project)
    'react/jsx-filename-extension': [1, {extensions: ['.js', '.jsx', '.ts', '.tsx']}],
    // should add ".ts" if typescript project
    'react/prop-types': 'off',
    'require-jsdoc': 'off',
    'max-len': 'off',
  },
  'settings': {
    'react': {
      'version': 'detect',
    },
  },

};
