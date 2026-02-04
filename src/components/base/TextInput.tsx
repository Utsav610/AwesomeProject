import { useState, ReactNode, FC } from 'react';
import {
  TextInput as RNTextInput,
  View,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  StyleSheet,
} from 'react-native';

import { getStyles, theme } from '@/styles';
import { Text } from './Text';

export interface InputProps extends Omit<React.ComponentProps<typeof RNTextInput>, 'style'> {
  value: string;
  onChangeText: (text: string) => void;

  label?: string;
  errorText?: string;

  leftComponent?: ReactNode;
  rightComponent?: ReactNode;

  containerStyle?: StyleProp<ViewStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export const TextInput: FC<InputProps> = ({
  value,
  onChangeText,

  label,
  errorText,

  leftComponent,
  rightComponent,

  editable = true,
  containerStyle,
  inputStyle,

  onFocus,
  onBlur,
  ...rest
}) => {
  const [isFocused, setIsFocused] = useState(false);

  type OnFocusType = React.ComponentProps<typeof RNTextInput>['onFocus'];
  type OnBlurType = React.ComponentProps<typeof RNTextInput>['onBlur'];

  const handleFocus: OnFocusType = e => {
    setIsFocused(true);
    onFocus?.(e);
  };

  const handleBlur: OnBlurType = e => {
    setIsFocused(false);
    onBlur?.(e);
  };

  const stateClass = !editable
    ? 'bg-disabledLabel border-outlineDefault'
    : errorText
    ? 'border-loss'
    : isFocused
    ? 'border-outlineSelected'
    : 'border-outlineDefault';

  return (
    <View>
      {label && (
        <Text size="sm" weight="medium" color="primary">
          {label}
        </Text>
      )}

      <View
        style={StyleSheet.flatten([
          getStyles(`flex-row items-center px-12 py-8 rounded-4 border-1 bg-surface ${stateClass}`),
          containerStyle,
        ])}
      >
        {leftComponent}

        <RNTextInput
          {...rest}
          editable={editable}
          value={value}
          onChangeText={onChangeText}
          onFocus={handleFocus}
          onBlur={handleBlur}
          style={StyleSheet.flatten([getStyles('flex-1 text-base text-foreground'), inputStyle])}
          placeholderTextColor={theme.colors.secondary}
        />

        {rightComponent}
      </View>

      {errorText && (
        <Text size="xs" color="loss">
          {errorText}
        </Text>
      )}
    </View>
  );
};
