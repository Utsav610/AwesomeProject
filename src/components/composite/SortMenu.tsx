import { FC, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '@components/base';
import { PopupMenuWrapper } from '../base/PopupMenuWrapper';
import { MenuItem } from '../base/MenuItem';

const SORT_OPTIONS = [
  'A-Z Alphabetically',
  'Z-A Alphabetically',
  'LTP (Low to high)',
  'LTP (High to Low)',
  'P&L (Low to high)',
  'P&L (High to Low)',
];

export const SortMenu: FC = () => {
  const [selected, setSelected] = useState(SORT_OPTIONS[0]);

  return (
    <PopupMenuWrapper
      trigger={open => (
        <TouchableOpacity onPress={open}>
          <Text weight="semibold">☰ Sort</Text>
        </TouchableOpacity>
      )}
    >
      {SORT_OPTIONS.map(item => (
        <MenuItem
          key={item}
          label={item}
          selected={selected === item}
          onPress={() => setSelected(item)}
        />
      ))}
    </PopupMenuWrapper>
  );
};
