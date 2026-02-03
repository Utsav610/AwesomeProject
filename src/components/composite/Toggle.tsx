import { FC, useEffect, useRef } from 'react';
import { Pressable, Animated, ViewStyle } from 'react-native';
import { getStyles } from '@/styles';

interface ToggleProps {
  value: boolean;
  onChange: (value: boolean) => void;
  disabled?: boolean;
}

export const Toggle: FC<ToggleProps> = ({ value, onChange, disabled = false }) => {
  const anim = useRef(new Animated.Value(value ? 1 : 0)).current;

  useEffect(() => {
    Animated.timing(anim, {
      toValue: value ? 1 : 0,
      duration: 120,
      useNativeDriver: false,
    }).start();
  }, [value, anim]);

  const translateX = anim.interpolate({
    inputRange: [0, 1],
    outputRange: [2, 22],
  });

  const trackClass = disabled ? 'bg-muted' : value ? 'bg-primary' : 'bg-border';

  return (
    <Pressable
      onPress={() => !disabled && onChange(!value)}
      style={[
        getStyles(`w-44 h-24 rounded-full justify-center ${trackClass} `),
        disabled && getStyles('opacity-50'),
      ]}
    >
      <Animated.View
        style={[
          getStyles('w-20 h-20 bg-background rounded-full'),
          { transform: [{ translateX }] } as ViewStyle,
        ]}
      />
    </Pressable>
  );
};
