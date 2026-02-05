import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  type PressableProps,
  type ViewStyle,
} from 'react-native';

import { getStyles } from '@/styles/getStyles';
import { Text } from './Text';
import { ColorKey, theme } from '@/styles';
import { FC } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';
type ButtonShape = 'default' | 'pill';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  fullWidth?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-onBackground',
  secondary: 'bg-bodyDark border border-onBackground',
  danger: 'bg-sellButton',
  success: 'bg-buyButton',
};

const SHAPE_STYLES: Record<ButtonShape, string> = {
  default: 'rounded-12 px-16 py-12',
  pill: 'rounded-full px-20 py-10',
};

const TEXT_COLORS: Record<ButtonVariant, string> = {
  primary: 'bodyDark',
  secondary: 'textTabSelected',
  danger: 'sell',
  success: 'onBuy',
};

const LOADER_COLORS: Record<ButtonVariant, string> = {
  primary: theme.colors.bodyLight,
  secondary: theme.colors.primary,
  danger: theme.colors.sell,
  success: theme.colors.onBuy,
};

export const Button: FC<ButtonProps> = ({
  title,
  variant = 'primary',
  shape = 'default',
  disabled,
  fullWidth,
  style,
  isLoading = false,
  onPress,
  ...props
}) => {
  const baseStyle = 'justify-center items-center';
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50' : '';

  const containerStyle = getStyles(
    `${baseStyle} ${VARIANT_STYLES[variant]} ${SHAPE_STYLES[shape]} ${widthStyle} ${disabledStyle}`,
  );

  return (
    <Pressable
      disabled={disabled || isLoading}
      style={StyleSheet.flatten([containerStyle, style as ViewStyle])}
      onPress={onPress}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={LOADER_COLORS[variant]} />
      ) : (
        <Text weight="semibold" size="base" color={TEXT_COLORS[variant] as ColorKey}>
          {title}
        </Text>
      )}
    </Pressable>
  );
};
