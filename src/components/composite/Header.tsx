import { ReactNode, FC } from 'react';
import { View, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { getStyles } from '@/styles';
import { Text } from '@/components/base/Text';
import { BackArrow } from '@/assets/icons';

export interface HeaderProps {
  title?: string;

  center?: ReactNode;
  right?: ReactNode;

  leftIcon?: ReactNode;
  onLeftIconPress?: () => void;
}

export const Header: FC<HeaderProps> = ({ title, center, right, leftIcon, onLeftIconPress }) => {
  const navigation = useNavigation();

  const handleLeftPress = () => {
    if (onLeftIconPress) {
      onLeftIconPress();
    } else {
      navigation.goBack();
    }
  };

  return (
    <View style={getStyles('h-56 flex-row items-center px-16 bg-backgroundDefault')}>
      {/* LEFT */}
      <Pressable onPress={handleLeftPress} hitSlop={10}>
        {leftIcon ?? <BackArrow />}
      </Pressable>

      {/* CENTER */}
      <View style={getStyles('flex-1 ml-12')}>
        {center ? (
          center
        ) : title ? (
          <Text size="xl" weight="semibold">
            {title}
          </Text>
        ) : null}
      </View>

      {/* RIGHT */}
      {right ? <View>{right}</View> : null}
    </View>
  );
};
