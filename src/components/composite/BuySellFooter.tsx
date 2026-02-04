import { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Button, Text } from '@components/base';
import { getStyles } from '@/styles/getStyles';
import { AlertIcon } from '@/assets/icons';
import { locale } from '@locales/index';

export type ButtonProps = {
  onBuyPress?: () => void;
  onSellPress?: () => void;
  onAlertPress?: () => void;
};

export const BuySellFooter: FC = ({ onBuyPress, onSellPress, onAlertPress }: ButtonProps) => {
  return (
    <View style={getStyles('flex-row px-12 py-16 gap-4 bg-background border-t border-border')}>
      <Pressable
        onPress={onAlertPress}
        style={getStyles(
          'flex-row px-16 gap-4 rounded-lg justify-center items-center border-2 rounded-full',
        )}
      >
        <AlertIcon />
        <Text weight="semibold" size="base">
          {locale?.common?.alert}
        </Text>
      </Pressable>

      <Button
        title={locale.common.sell}
        variant={'danger'}
        shape={'pill'}
        fullWidth={true}
        onPress={onSellPress}
        style={getStyles('flex-1')}
      />
      <Button
        title={locale.common.buy}
        variant={'success'}
        shape={'pill'}
        fullWidth={true}
        onPress={onBuyPress}
        style={getStyles('flex-1')}
      />
    </View>
  );
};
