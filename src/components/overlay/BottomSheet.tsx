import { Modal, Pressable, StyleSheet, View, type ViewStyle } from 'react-native';
import { getStyles, SCREEN_HEIGHT } from '@styles/index';
import { FC } from 'react';

export type BottomSheetProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
  maxHeight?: number;
};

export const BottomSheet: FC<BottomSheetProps> = ({
  visible,
  onClose,
  children,
  style,
  maxHeight = SCREEN_HEIGHT * 0.85,
}) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={getStyles('flex-1 justify-end')}>
        {/* Backdrop */}
        <Pressable style={getStyles('absolute inset-0 bg-overlay opacity-50')} onPress={onClose} />

        {/* Sheet */}
        <View
          style={StyleSheet.flatten([getStyles('bg-surface rounded-t-28'), { maxHeight }, style])}
        >
          {children}
        </View>
      </View>
    </Modal>
  );
};
