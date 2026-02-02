import { getStyles, theme } from '@/styles';
import { wp, hp } from '@/styles/scale';
import { ReactNode, memo, useState } from 'react';
import { StyleProp, StyleSheet, TextInput, TextStyle, View, ViewStyle } from 'react-native';
import { Text } from './Text';

export interface IInputTextProps extends React.ComponentProps<typeof TextInput> {
  editable?: boolean;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  leftPrefix?: string;
  rightPrefix?: string;
  title?: string;
  value: string;
  placeholder?: string;
  errorText?: string;
  rightComponent?: ReactNode;
  leftComponent?: ReactNode;
  onChangeText: (text: string) => void;
  onPress?: () => void;
  onFocus?: (event: any) => void;
  onBlur?: (event: any) => void;
}

export const TextInputView = (props: IInputTextProps) => {
  const {
    editable = true,
    style,
    containerStyle,
    textStyle,
    value,
    title,
    leftPrefix,
    rightPrefix,
    placeholder,
    errorText,
    rightComponent,
    leftComponent,
    onChangeText,
    onPress,
    onFocus,
    onBlur,
    ...rest
  } = props;

  const [isFocused, setIsFocused] = useState(false);

  const onInputFocus = (event: any) => {
    setIsFocused(true);
    if (onFocus) {
      onFocus(event); // Call onBlur if it's defined
    }
    // props?.onFocusEffect && props?.onFocusEffect();
  };

  const onInputBlur = (event: any) => {
    setIsFocused(false);
    if (onBlur) {
      onBlur(event); // Call onBlur if it's defined
    }
  };

  return (
    <View style={[{ ...(style as ViewStyle) }]}>
      {title ? (
        <Text size="base" weight="regular" color="primary">
          {title}
        </Text>
      ) : null}

      <View
        style={[
          getStyles('flex-row items-center px-12 py-8 rounded-4 border-1 '),
          {
            borderColor: isFocused ? theme.colors.primary : theme.colors.border,
            backgroundColor: editable ? theme.colors.background : theme.colors.muted,
          },
          { ...(containerStyle as ViewStyle) },
        ]}
      >
        {leftComponent && leftComponent}
        {leftPrefix && (
          <Text size="base" weight="regular" color="error" style={getStyles('mr-4')}>
            {leftPrefix}
          </Text>
        )}
        <TextInput
          editable={editable}
          selectionColor={theme.colors.primary}
          style={[
            getStyles('flex-1 text-base'),
            leftComponent ? { marginHorizontal: wp(12) } : null,
            !editable ? { color: theme.colors.muted } : null,
            textStyle as TextStyle,
          ]}
          value={value}
          placeholder={placeholder}
          onChangeText={onChangeText}
          onFocus={onInputFocus}
          onBlur={onInputBlur}
          {...rest}
        />

        {rightPrefix && (
          <Text size="base" weight="regular" color="error" style={getStyles('mr-4')}>
            {rightPrefix}
          </Text>
        )}
        {rightComponent && rightComponent}
      </View>
      {errorText ? (
        <Text size="base" weight="regular" color="error">
          {errorText}
        </Text>
      ) : null}
    </View>
  );
};
