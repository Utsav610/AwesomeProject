import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Text } from '@components/base';
import { OverlayContentWrapper } from '@components/overlay';
import { RadioItem } from '../base/RadioItem';
import { SORT_OPTIONS } from '@/constants/ui.constants';
import { SortOption } from '@/types/CommonTypes';
import { locale } from '@/locales';

interface SortMenuProps {
  selected: SortOption;
  onSelect: (option: SortOption) => void;
}

export const SortMenu: FC<SortMenuProps> = ({ selected, onSelect }) => {
  return (
    <OverlayContentWrapper
      triggerPopup={handlePopupOpen => (
        <TouchableOpacity onPress={handlePopupOpen}>
          <Text weight="semibold">☰ {locale?.common?.sort}</Text>
        </TouchableOpacity>
      )}
    >
      {SORT_OPTIONS.map(option => (
        <RadioItem
          key={option.id}
          label={option.label}
          selected={option.id === selected.id}
          onPress={() => onSelect(option)}
        />
      ))}
    </OverlayContentWrapper>
  );
};
