import { Text as RNText, StyleSheet, type TextProps } from 'react-native';
import { getStyles } from '@/styles/getStyles';
import { fontFamily, type TextSize, type TextWeight } from '@styles/typography';
import type { ColorKey } from '@styles/theme';
import { FC } from 'react';

export type AppTextProps = TextProps & {
  size?: TextSize;
  weight?: TextWeight;
  color?: ColorKey;
};

export const Text: FC<AppTextProps> = ({
  size = 'base',
  weight = 'regular',
  color = 'primary',
  style,
  ...props
}) => {
  const tokenStyle = getStyles(`text-${size} text-${color}`);

  return (
    <RNText
      {...props}
      style={StyleSheet.flatten([tokenStyle, { fontFamily: fontFamily[weight] }, style])}
    />
  );
};
