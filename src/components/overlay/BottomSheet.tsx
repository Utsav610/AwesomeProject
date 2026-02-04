import { Modal, Pressable, StyleSheet, View, type ViewStyle } from 'react-native';
import { getStyles } from '@/styles/getStyles';

export type BottomSheetProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  style?: ViewStyle;
};

export const BottomSheet = ({ visible, onClose, children, style }: BottomSheetProps) => {
  return (
    <Modal visible={visible} transparent animationType="slide" onRequestClose={onClose}>
      <View style={getStyles('flex-1 justify-end')}>
        {/* Backdrop */}
        <Pressable style={getStyles('absolute inset-0 bg-overlay opacity-50')} onPress={onClose} />

        {/* Sheet */}
        <View style={StyleSheet.flatten([getStyles('bg-surface rounded-t-xl'), style])}>
          {children}
        </View>
      </View>
    </Modal>
  );
};
