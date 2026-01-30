import React from 'react';
import { Text as RNText, TextProps, TextStyle, StyleProp } from 'react-native';
import { getStyles } from '../../styles';

export const Text: React.FC<TextProps> = ({ style, ...props }) => {
  const appliedStyle: StyleProp<TextStyle> | undefined =
    typeof style === 'string' ? (getStyles(style) as any) : (style as StyleProp<TextStyle>);

  const finalStyle = appliedStyle
    ? Array.isArray(appliedStyle)
      ? appliedStyle
      : [appliedStyle]
    : undefined;

  return (
    <RNText style={finalStyle} {...props}>
      {props.children}
    </RNText>
  );
};
