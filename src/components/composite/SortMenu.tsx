import { FC, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text, RadioItem } from '@components/base';
import { OverlayContentWrapper } from '@components/overlay';
import { SORT_OPTIONS } from '@constants/ui.constants';
import { SortOption } from '@/types/commonTypes';
import { locale } from '@/locales';

interface SortMenuProps {
  selected: SortOption;
  onSelect: (option: SortOption) => void;
}

export const SortMenu: FC<SortMenuProps> = ({ selected, onSelect }) => {
  const renderOption = useCallback(
    (option: SortOption) => (
      <RadioItem
        key={option.id}
        label={option.label}
        selected={option.id === selected.id}
        onPress={() => onSelect(option)}
      />
    ),
    [onSelect, selected],
  );

  return (
    <OverlayContentWrapper
      triggerPopup={handleOverlayOpen => (
        <TouchableOpacity onPress={handleOverlayOpen}>
          <Text weight="semibold">☰ {locale?.common?.sort}</Text>
        </TouchableOpacity>
      )}
    >
      {SORT_OPTIONS.map(renderOption)}
    </OverlayContentWrapper>
  );
};
