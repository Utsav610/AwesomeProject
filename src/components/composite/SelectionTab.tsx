import { Pressable, View } from 'react-native';
import { FC } from 'react';
import { Text } from '@components/base';
import { getStyles } from '@styles/getStyles';
import { CheckmarkIcon } from '@assets/icons';

export type TabItem = {
  id: string;
  label: string;
};

interface SelectionTabProps {
  leftTab: TabItem;
  onLeftPress: () => void;
  rightTab: TabItem;
  onRightPress: () => void;
  selectedOption: string;
}

export const SelectionTab: FC<SelectionTabProps> = ({
  leftTab,
  onLeftPress,
  rightTab,
  onRightPress,
  selectedOption,
}) => {
  const isLeftSelected = leftTab?.id === selectedOption;
  const isRightSelected = rightTab?.id === selectedOption;

  return (
    <View style={getStyles('flex-row')}>
      <Pressable
        onPress={onLeftPress}
        style={getStyles(
          `flex-1 flex-row gap-8 items-center justify-center p-4 border-1 rounded-l ${
            isLeftSelected
              ? 'bg-backgroundSelected border-selectionBorder'
              : 'bg-surface border-outlineDefault'
          }`,
        )}
      >
        {isLeftSelected && <CheckmarkIcon />}
        <Text
          weight={isLeftSelected ? 'semibold' : 'regular'}
          size="base"
          color={isLeftSelected ? 'outlineSelected' : 'textTabActive'}
        >
          {leftTab?.label}
        </Text>
      </Pressable>
      <Pressable
        onPress={onRightPress}
        style={getStyles(
          `flex-1 flex-row gap-8 items-center justify-center p-4 border-1 rounded-r ${
            isRightSelected
              ? 'bg-backgroundSelected border-selectionBorder'
              : 'bg-surface border-outlineDefault'
          }`,
        )}
      >
        {isRightSelected && <CheckmarkIcon />}
        <Text
          weight={isRightSelected ? 'semibold' : 'regular'}
          size="base"
          color={isRightSelected ? 'outlineSelected' : 'textTabActive'}
        >
          {rightTab?.label}
        </Text>
      </Pressable>
    </View>
  );
};
