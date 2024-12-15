import js from '@eslint/js';
import globals from 'globals';
import babelParser from '@babel/eslint-parser';
import prettierPlugin from 'eslint-plugin-prettier/recommended';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      globals: globals.node,
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          presets: [
            'babel-preset-gatsby-package',
            ['@babel/preset-react', { runtime: 'automatic' }]
          ]
        }
      }
    }
  },
  prettierPlugin
];
