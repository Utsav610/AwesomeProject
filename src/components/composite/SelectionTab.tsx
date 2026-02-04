import { Pressable, View } from 'react-native';
import React from 'react';
import { Text } from '@components/base';
import { getStyles } from '@/styles';
import { CheckmarkIcon } from '@/assets/icons';

type SelectionTabProps = {
    leftLabel: string;
    onLeftPress: () => void;
    rightLabel: string;
    onRightPress: () => void;
    selectedOption: string;
};

export const SelectionTab = ({
    leftLabel,
    onLeftPress,
    rightLabel,
    onRightPress,
    selectedOption,
}: SelectionTabProps) => {
    const isLeftSelected = leftLabel === selectedOption;
    const isRightSelected = rightLabel === selectedOption;

    return (
        <View style={getStyles('flex-row')}>
            <Pressable
                onPress={onLeftPress}
                style={getStyles(
                    `flex-1 flex-row gap-8 items-center justify-center p-4 border-1 rounded-l ${isLeftSelected
                        ? 'bg-selectionBackground border-selectionBorder'
                        : 'bg-surface border-border'
                    }`,
                )}
            >
                {isLeftSelected && <CheckmarkIcon />}
                <Text weight={isLeftSelected ? 'semibold' : 'regular'} size="base">{leftLabel}</Text>
            </Pressable>
            <Pressable
                onPress={onRightPress}
                style={getStyles(
                    `flex-1 flex-row gap-8 items-center justify-center p-4 border-1 rounded-r ${isRightSelected
                        ? 'bg-selectionBackground border-selectionBorder'
                        : 'bg-surface border-border'
                    }`,
                )}
            >
                {isRightSelected && <CheckmarkIcon />}
                <Text weight={isRightSelected ? 'semibold' : 'regular'} size="base">{rightLabel}</Text>
            </Pressable>
        </View>
    );
};
