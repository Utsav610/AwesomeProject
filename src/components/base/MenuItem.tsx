import { FC } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Text } from '@components/base';
import { getStyles } from '@/styles';
import { Radio, SelectRadio } from '@/assets/icons';

interface MenuItemProps {
  label: string;
  selected: boolean;
  onPress: () => void;
}

export const MenuItem: FC<MenuItemProps> = ({ label, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={getStyles('flex-row px-16 py-12 justify-between items-center')}
      onPress={onPress}
    >
      <Text >{label}</Text>
      {selected ? <SelectRadio /> : <Radio />}

    </TouchableOpacity>
  );
};
