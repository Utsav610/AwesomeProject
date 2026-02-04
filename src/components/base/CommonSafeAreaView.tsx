import React, { FC, memo } from 'react';
import { SafeAreaView, SafeAreaViewProps } from 'react-native-safe-area-context';
import { getStyles } from '@styles/getStyles';
import { StyleSheet } from 'react-native';

export const CommonSafeAreaView: FC<SafeAreaViewProps> = props => {
  return (
    <SafeAreaView
      edges={['top', 'bottom']}
      {...props}
      style={StyleSheet.flatten([getStyles('flex-1 bg-background'), props.style])}
    >
      {props.children}
    </SafeAreaView>
  );
};
