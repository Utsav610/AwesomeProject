import { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Button } from '@components/base';
import { getStyles } from '@/styles/getStyles';
import { Text } from '@components/base';
import { AlertIcon } from '@/assets/icons';

export type ButtonProps = {
  onBuyPress?: () => void;
  onSellPress?: () => void;
  onAlertPress?: () => void;
};

export const BuySellFooter: FC = ({ onBuyPress, onSellPress, onAlertPress }: ButtonProps) => {
  const containerStyle = getStyles(
    'flex-row px-12 py-16 gap-4 bg-background border-t border-border',
  );

  return (
    <View style={containerStyle}>
      <Pressable
        onPress={onAlertPress}
        style={getStyles('flex-row px-16 py-12 rounded-lg justify-center items-center')}
      >
        <AlertIcon />
        <Text weight="semibold" size="base">
          Alert
        </Text>
      </Pressable>

      <Button title="SELL" style={getStyles('flex-1')} onPress={onSellPress} />
      <Button title="BUY" style={getStyles('flex-1')} onPress={onBuyPress} />
    </View>
  );
};
