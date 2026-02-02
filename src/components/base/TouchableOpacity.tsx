import React, { forwardRef, memo } from 'react';
import {
  TouchableOpacity as RNTouchOpacity,
  TouchableOpacityProps as RNTouchOpacityProps,
} from 'react-native';

export interface TouchableOpacityProps extends RNTouchOpacityProps {}

export const TouchableOpacity = memo(
  forwardRef<React.ElementRef<typeof RNTouchOpacity>, TouchableOpacityProps>((props, ref) => {
    return (
      <RNTouchOpacity ref={ref} delayPressIn={0} activeOpacity={0.5} hitSlop={20} {...props}>
        {props.children}
      </RNTouchOpacity>
    );
  }),
);
