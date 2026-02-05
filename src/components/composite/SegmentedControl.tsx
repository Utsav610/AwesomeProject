import { View } from 'react-native';
import { Chip } from '@components/base';
import { getStyles } from '@styles/getStyles';
import { FC } from 'react';

export type SegmentOption = {
  id: string;
  label: string;
};

interface SegmentedControlProps {
  options: SegmentOption[];
  value: string;
  onChange: (id: string) => void;
}

export const SegmentedControl: FC<SegmentedControlProps> = ({ options, value, onChange }) => {
  return (
    <View style={getStyles('flex-row gap-12')}>
      {options.map(option => (
        <Chip
          key={option.id}
          label={option.label}
          selected={option.id === value}
          onPress={() => onChange(option?.id)}
        />
      ))}
    </View>
  );
};
