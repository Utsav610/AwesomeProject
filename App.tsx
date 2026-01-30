import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@queries/queryClient';
import { RootNavigator } from '@navigation/RootNavigator';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { CommonSafeAreaView } from '@components/base';
import { Text } from '@components/base';
import { getStyles } from './src/styles/getStyles';

export default function App() {
  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <CommonSafeAreaView>
          <StatusBar barStyle="light-content" />
          <RootNavigator />
          <View>
            <Text style={getStyles('text-2xl font-bold text-center mt-8 text-textSecondary')}>
              Welcome to AwesomeProject!
            </Text>
          </View>
        </CommonSafeAreaView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
