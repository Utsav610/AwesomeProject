import React, { memo } from 'react';
import { Modal, View, ActivityIndicator } from 'react-native';
import { getStyles, theme } from '@styles/index';

type LoaderProps = {
  visible: boolean;
};

export const Loader: React.FC<LoaderProps> = ({ visible }) => {
  return (
    <>
      {visible ? (
        <Modal visible={visible} transparent statusBarTranslucent={true} animationType="fade">
          <View style={getStyles('flex-1 justify-center items-center')}>
            <ActivityIndicator size={'large'} color={theme.colors.primary} />
          </View>
        </Modal>
      ) : null}
    </>
  );
};
