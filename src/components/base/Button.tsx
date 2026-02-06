import {
  ActivityIndicator,
  Pressable,
  StyleSheet,
  type PressableProps,
  type ViewStyle,
  View,
} from 'react-native';
import { FC, ReactNode } from 'react';

import { Text } from './Text';
import { ColorKey, theme, getStyles, TextSize, TextWeight } from '@styles/index';

type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success' | 'outline';
type ButtonShape = 'default' | 'pill';
type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends PressableProps {
  title: string;
  variant?: ButtonVariant;
  shape?: ButtonShape;
  size?: ButtonSize;
  icon?: ReactNode;
  isLoading?: boolean;
  disabled?: boolean;
}

/* ===== VARIANT ===== */
const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-onBackground',
  secondary: 'bg-backgroundSelected border-1 border-selectedText',
  danger: 'bg-sellButton',
  success: 'bg-buyButton',
  outline: 'border-1 border-outlineDefault bg-backgroundDefault',
};

/* ===== SHAPE ===== */
const SHAPE_STYLES: Record<ButtonShape, string> = {
  default: 'rounded-12',
  pill: 'rounded-full',
};

/* ===== SIZE ===== */
const SIZE_STYLES: Record<ButtonSize, string> = {
  sm: 'h-32 px-12',
  md: 'h-40 px-16',
  lg: 'h-56 px-20',
};

/* ===== TEXT COLOR ===== */
const TEXT_COLORS: Record<ButtonVariant, ColorKey> = {
  primary: 'bodyDark',
  secondary: 'textTabSelected',
  danger: 'sell',
  success: 'onBuy',
  outline: 'onBackground',
};

const TEXT_SIZES: Record<ButtonSize, TextSize> = {
  sm: 'base',
  md: 'xs',
  lg: 'base',
};

const FONT_WEIGHTS: Record<ButtonVariant, TextWeight> = {
  primary: 'medium',
  secondary: 'medium',
  danger: 'semibold',
  success: 'semibold',
  outline: 'medium',
};

/* ===== LOADER COLOR ===== */
const LOADER_COLORS: Record<ButtonVariant, string> = {
  primary: theme.colors.bodyLight,
  secondary: theme.colors.onBackground,
  danger: theme.colors.sell,
  success: theme.colors.onBuy,
  outline: theme.colors.onBackground,
};

export const Button: FC<ButtonProps> = ({
  title,
  icon,
  variant = 'primary',
  shape = 'default',
  size = 'md',
  disabled,
  isLoading = false,
  style,
  onPress,
  ...props
}) => {
  const containerStyle = getStyles(
    `justify-center items-center ${VARIANT_STYLES[variant]} ${SHAPE_STYLES[shape]} ${
      SIZE_STYLES[size]
    } ${disabled ? 'opacity-50' : ''}`,
  );

  return (
    <Pressable
      disabled={disabled || isLoading}
      onPress={onPress}
      style={StyleSheet.flatten([containerStyle, style as ViewStyle])}
      {...props}
    >
      {isLoading ? (
        <ActivityIndicator size="small" color={LOADER_COLORS[variant]} />
      ) : (
        <View style={getStyles('flex-row items-center gap-8')}>
          {icon ? icon : null}

          <Text weight={FONT_WEIGHTS[variant]} size={TEXT_SIZES[size]} color={TEXT_COLORS[variant]}>
            {title}
          </Text>
        </View>
      )}
    </Pressable>
  );
};
