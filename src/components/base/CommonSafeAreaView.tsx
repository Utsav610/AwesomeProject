import React, { FC, memo } from 'react';
import { SafeAreaView, SafeAreaViewProps, useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStyles } from '../../styles';

export const CommonSafeAreaView: FC<SafeAreaViewProps> = props => {
  return (
    <SafeAreaView edges={['top', 'bottom']} {...props} style={[getStyles('flex-1'), props.style]}>
      {props.children}
    </SafeAreaView>
  );
};
