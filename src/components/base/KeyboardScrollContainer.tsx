import { FC, ReactNode } from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, type ViewStyle } from 'react-native';

interface KeyboardScrollContainerProps {
  children: ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

export const KeyboardScrollContainer: FC<KeyboardScrollContainerProps> = ({
  children,
  style,
  contentContainerStyle,
}) => {
  return (
    <KeyboardAvoidingView
      style={[{ flex: 1 }, style]}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
    >
      <ScrollView keyboardShouldPersistTaps="handled" contentContainerStyle={contentContainerStyle}>
        {children}
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
