const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');
const path = require('path');
/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */
const config = {
  resolver: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@features': path.resolve(__dirname, 'src/features'),
      '@services': path.resolve(__dirname, 'src/services'),
      '@navigation': path.resolve(__dirname, 'src/navigation'),
      '@queries': path.resolve(__dirname, 'src/queries'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
