import { FC } from 'react';
import { Pressable, View } from 'react-native';
import { Button } from '@components/base';
import { getStyles } from '@/styles/getStyles';
import { Text } from '@components/base';
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
          'flex-row px-16 py-10 gap-4 rounded-lg justify-center items-center border-2 rounded-full',
        )}
      >
        <AlertIcon />
        <Text weight="semibold" size="base">
          {locale?.common?.alert}
        </Text>
      </Pressable>

      <Button
        title={locale.common.sell}
        style={getStyles('flex-1 py-10 rounded-full bg-sell')}
        onPress={onSellPress}
      />
      <Button
        title={locale.common.buy}
        style={getStyles('flex-1 py-10 rounded-full bg-buy')}
        onPress={onBuyPress}
      />
    </View>
  );
};
