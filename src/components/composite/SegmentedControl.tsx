import { View } from 'react-native';
import { Chip } from '@components/base';
import { getStyles } from '@styles/getStyles';
import { FC, useCallback } from 'react';

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
  const renderOption = useCallback(
    (option: SegmentOption) => (
      <Chip
        key={option?.id}
        label={option?.label}
        selected={option?.id === value}
        onPress={() => onChange(option?.id)}
      />
    ),
    [onChange, value],
  );

  return <View style={getStyles('flex-row gap-12')}>{options?.map(renderOption)}</View>;
};
