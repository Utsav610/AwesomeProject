import React, { FC, memo } from 'react';
import { SafeAreaView, SafeAreaViewProps, useSafeAreaInsets } from 'react-native-safe-area-context';
import { getStyles } from '../../styles';

const CommonSafeAreaView: FC<SafeAreaViewProps> = props => {
  const { bottom, top } = useSafeAreaInsets();
  return (
    <SafeAreaView edges={['top', 'bottom']} {...props} style={[getStyles('flex-1'), props.style]}>
      {props.children}
    </SafeAreaView>
  );
};

export default memo(CommonSafeAreaView);
