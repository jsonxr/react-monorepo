/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable prettier/prettier */
const path = require('path')

module.exports = function(api) {
  api.cache(true)
  return {
    presets: ['module:metro-react-native-babel-preset'],

    // Make sure we only pull in ONE of the following modules
    // react keeps showing up in the project node_modules
    plugins: [
      [
        'module-resolver',
        {
          root: ['./src'],
          alias: {
            react: require.resolve('react', {
              paths: [path.join(__dirname, './')],
            }),
            '^react-native$': require.resolve(`react-native`, {
              paths: [path.join(__dirname, './')],
            }),
            '^react-native/(.+)': ([, name]) =>
              require.resolve(`react-native/${name}`, {
                paths: [path.join(__dirname, './')],
              }),
            // 'react-native-svg': require.resolve('react-native-svg', {
            //   paths: [path.join(__dirname, './')],
            // }),
            // '@apollo/react-hooks': require.resolve('@apollo/react-hooks', {
            //   paths: [path.join(__dirname, './')],
            // }),
            // 'apollo-client': require.resolve('apollo-client', {
            //   paths: [path.join(__dirname, './')],
            // }),
          },
          extensions: [
            '.ios.js',
            '.ios.ts',
            '.ios.tsx',
            '.android.js',
            '.android.ts',
            '.android.tsx',
            '.native.js',
            '.native.ts',
            '.native.tsx',
            '.js',
            '.ts',
            '.tsx',
          ],
        },
      ],
    ],


  }
}