import { FC, ReactNode, useState, useCallback } from 'react';
import {
  TextInput as RNTextInput,
  View,
  type StyleProp,
  type ViewStyle,
  type TextStyle,
  StyleSheet,
} from 'react-native';

import { getStyles, theme } from '@styles/index';
import { Text } from '@components/base';

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

  type OnFocusType = NonNullable<React.ComponentProps<typeof RNTextInput>['onFocus']>;

  type OnBlurType = NonNullable<React.ComponentProps<typeof RNTextInput>['onBlur']>;

  const handleFocus: OnFocusType = useCallback(
    e => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus],
  );

  const handleBlur: OnBlurType = useCallback(
    e => {
      setIsFocused(false);
      onBlur?.(e);
    },
    [onBlur],
  );

  const stateClass = !editable
    ? 'bg-disabledLabel border-outlineDefault'
    : errorText
    ? 'border-loss'
    : isFocused
    ? 'border-outlineSelected'
    : 'border-outlineDefault';

  return (
    <View>
      {label ? (
        <Text size="sm" weight="medium" color="primary">
          {label}
        </Text>
      ) : null}

      <View
        style={StyleSheet.flatten([
          getStyles(
            `flex-row items-center px-12 py-8 rounded-4 border-1 bg-bodyDark border-outlineDefault ${stateClass}`,
          ),
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
          style={StyleSheet.flatten([getStyles('flex-1 text-base text-textTabActive'), inputStyle])}
          placeholderTextColor={theme.colors.secondary}
        />

        {rightComponent}
      </View>

      {errorText ? (
        <Text size="xs" color="loss">
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};
