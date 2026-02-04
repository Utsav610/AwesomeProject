import { FC } from 'react';
import { Modal, Pressable, View } from 'react-native';

import { getStyles } from '@/styles/getStyles';
import { Text } from '@/components/base/Text';
import { Button } from '@/components/base/Button';

interface ActionConfig {
  label: string;
  onPress: () => void;
}

interface ConfirmDialogProps {
  visible: boolean;
  title: string;

  primaryAction: ActionConfig;
  secondaryAction: ActionConfig;

  onClose: () => void;
}

export const ConfirmDialog: FC<ConfirmDialogProps> = ({
  visible,
  title,
  primaryAction,
  secondaryAction,
  onClose,
}) => {
  return (
    <Modal visible={visible} transparent animationType="fade" onRequestClose={onClose}>
      <View style={getStyles('flex-1 justify-center items-center')}>
        {/* Backdrop */}
        <Pressable style={getStyles('absolute inset-0 bg-overlay opacity-50')} onPress={onClose} />

        {/* Dialog */}
        <View style={getStyles('w-280 bg-surface rounded-12 px-16 py-16')}>
          <Text size="lg" weight="semibold" color="foreground" style={getStyles('text-center')}>
            {title}
          </Text>

          <View style={getStyles('flex-row justify-between mt-16 gap-12')}>
            <Button
              variant="secondary"
              title={secondaryAction.label}
              onPress={secondaryAction.onPress}
            />

            <Button variant="primary" title={primaryAction.label} onPress={primaryAction.onPress} />
          </View>
        </View>
      </View>
    </Modal>
  );
};
