import { Pressable, type PressableProps, type ViewStyle } from 'react-native';
import { getStyles } from '@styles/getStyles';
import { Text } from '@components/base';
import { FC } from 'react';

export interface ChipProps extends PressableProps {
  label: string;
  selected?: boolean;
}

export const Chip: FC<ChipProps> = ({ label, selected = false, style, ...props }) => {
  const stateStyle = selected
    ? 'bg-backgroundSelected border-outlineSelected'
    : 'bg-neutralButtonLight border-outlineDefault';

  const textStyle = selected ? 'text-selectedText' : 'text-textSecondary';

  return (
    <Pressable
      {...props}
      style={[
        getStyles(`px-20 py-10 rounded-full border-1 justify-center items-center ${stateStyle}`),
        style as ViewStyle,
      ]}
    >
      <Text size="sm" weight="medium" style={getStyles(textStyle)}>
        {label}
      </Text>
    </Pressable>
  );
};
