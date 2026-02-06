import { getStyles } from '@styles/getStyles';
import { FC, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, type ViewStyle } from 'react-native';

interface KeyboardContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const KeyboardContainer: FC<KeyboardContainerProps> = ({ children, style }) => {
  return (
    <KeyboardAvoidingView
      style={StyleSheet.flatten([getStyles('flex-1'), style])}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
