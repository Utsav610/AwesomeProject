const workletsPluginOptions = {};

module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['react-native-worklets/plugin', workletsPluginOptions],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: process.env.ENVFILE,
        safe: false,
        allowUndefined: true,
      },
    ],
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@': './src',
          '@components': './src/components',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@services': './src/services',
          '@navigation': './src/navigation',
          '@queries': './src/queries',
          '@features': './src/features',
        },
      },
    ],
  ],
};
