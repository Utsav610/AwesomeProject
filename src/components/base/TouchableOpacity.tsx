import React, { forwardRef, memo } from 'react';
import {
  TouchableOpacity as BaseTouchableOpacity,
  TouchableOpacityProps as BaseTouchableOpacityProps,
} from 'react-native';
import Animated, { AnimatedProps } from 'react-native-reanimated';

const AnimatedTouchableOpacity = Animated.createAnimatedComponent(BaseTouchableOpacity);

export interface TouchableOpacityProps extends AnimatedProps<BaseTouchableOpacityProps> {}

export const TouchableOpacity = forwardRef<BaseTouchableOpacity, TouchableOpacityProps>(
  (props, ref) => {
    return (
      <AnimatedTouchableOpacity
        ref={ref}
        delayPressIn={0}
        activeOpacity={0.5}
        hitSlop={20}
        {...props}
      >
        {props.children}
      </AnimatedTouchableOpacity>
    );
  },
);
