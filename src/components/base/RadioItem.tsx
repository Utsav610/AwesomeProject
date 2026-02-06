import { FC } from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Text } from '@components/base';
import { getStyles } from '@/styles';
import { Radio, SelectRadio } from '@/assets/icons';

interface RadioItemProps {
  label: string;
  subLabel?: string;
  selected: boolean;
  onPress: () => void;
}

export const RadioItem: FC<RadioItemProps> = ({ label, subLabel, selected, onPress }) => {
  return (
    <TouchableOpacity
      style={getStyles('flex-row px-16 py-12 justify-between items-center')}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={getStyles('flex-1')}>
        <Text>{label}</Text>

        {subLabel ? (
          <Text size="sm" color="textSecondary" style={getStyles('mt-2')}>
            {subLabel}
          </Text>
        ) : null}
      </View>

      {selected ? <SelectRadio /> : <Radio />}
    </TouchableOpacity>
  );
};
