import { ESLint } from 'eslint';
import fs from 'fs';

const es = {
  env: {
    node: true,
    jest: true
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module'
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'always'],
    'no-unused-vars': ['warn'],
    'no-console': ['warn'],
    '@typescript-eslint/no-non-null-assertion': 'off'
  }
};

es.env.cc = true;

async function lintAndFixCode(code) {
  const eslint = new ESLint({ fix: true });
  const results = await eslint.lintText(code);
  const fixedCode = results[0].output || code;
  return fixedCode;
}

// 使用示例
lintAndFixCode('module.exports = ' + JSON.stringify(es, null, 2) + ';\n').then(fixedCode => {
  fs.writeFileSync('./democ.mjs', fixedCode);
  // eslint-disable-next-line no-console
  console.log(fixedCode); // 打印经过 ESLint 自动修复后的代码
});
