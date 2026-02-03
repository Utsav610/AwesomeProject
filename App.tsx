import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClientProvider } from '@tanstack/react-query';

import { queryClient } from '@queries/index';
import { RootNavigator } from '@navigation/index';
import { StyleSheet, View } from 'react-native';
import React from 'react';
import { Button, CommonSafeAreaView, Text, TextInput } from '@components/base';
import { getStyles } from './src/styles/getStyles';
import { BuySellFooter } from '@/components/composite/BuySellFooter';
import { Toggle } from '@/components/composite';

export default function App() {
  const [toggle, setToggle] = React.useState(false);

  return (
    <SafeAreaProvider>
      <QueryClientProvider client={queryClient}>
        <CommonSafeAreaView>
          <StatusBar barStyle="light-content" />
          {/* <RootNavigator /> */}
          <View>
            <Text style={getStyles('text-2xl font-bold text-center mt-8 text-textSecondary')}>
              Welcome to AwesomeProject!
            </Text>
            <Button title="Submit" />
            <TextInput label="name" value="5" onChangeText={() => {}} />
            <BuySellFooter />
            <View style={getStyles('mt-8 px-8')}>
              <Toggle
                value={toggle}
                onChange={() => {
                  setToggle(!toggle);
                }}
              />
            </View>
          </View>
        </CommonSafeAreaView>
      </QueryClientProvider>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
