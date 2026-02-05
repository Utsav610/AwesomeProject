import { FC, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, type ViewStyle, Keyboard } from 'react-native';

interface KeyboardContainerProps {
  children: ReactNode;
  style?: ViewStyle;
}

export const KeyboardContainer: FC<KeyboardContainerProps> = ({ children, style }) => {
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      {children}
    </KeyboardAvoidingView>
  );
};
