// Minimal ESLint configuration for the existing React + Vite frontend.
//
// Deliberately narrow: uses only the ESLint/plugin versions already listed
// in package.json's devDependencies (eslint ^8.57.0, eslint-plugin-react
// ^7.34.1, eslint-plugin-react-hooks ^4.6.0) — no new packages added, no
// version upgrades, no broader tooling migration (e.g. no move to ESLint 9
// flat config, which would require different dependency versions). This
// exists purely so the "lint" script already defined in package.json has a
// config to run against — see docs/CONTENT_GAPS.md remediation notes /
// Phase 4B "tooling + documentation + technical SEO cleanup" scope.
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: { jsx: true },
  },
  settings: {
    react: { version: 'detect' },
  },
  rules: {
    // This codebase uses Vite's automatic JSX runtime (no `import React`
    // needed in component files — only main.jsx imports it, for
    // React.StrictMode), and does not use PropTypes anywhere.
    'react/react-in-jsx-scope': 'off',
    'react/jsx-uses-react': 'off',
    'react/prop-types': 'off',
  },
  ignorePatterns: ['dist/', 'node_modules/'],
};
