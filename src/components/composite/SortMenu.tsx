import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '@components/base';
import { PopupMenuWrapper } from '../base/PopupMenuWrapper';
import { MenuItem } from '../base/MenuItem';
import { SortOption } from '@/types/ConstantInterface';
import { SORT_OPTIONS } from '@/constants/ui.constants';

interface SortMenuProps {
  selected: SortOption;
  onSelect: (option: SortOption) => void;
}

export const SortMenu: FC<SortMenuProps> = ({ selected, onSelect }) => {
  return (
    <PopupMenuWrapper
      trigger={open => (
        <TouchableOpacity onPress={open}>
          <Text weight="semibold">☰ Sort</Text>
        </TouchableOpacity>
      )}
    >
      {SORT_OPTIONS.map(option => (
        <MenuItem
          key={option.id}
          label={option.label}
          selected={option.id === selected.id}
          onPress={() => onSelect(option)}
        />
      ))}
    </PopupMenuWrapper>
  );
};
