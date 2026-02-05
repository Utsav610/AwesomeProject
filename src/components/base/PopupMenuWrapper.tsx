import { FC, ReactNode, useRef, useState } from 'react';
import { View, Modal, Pressable, Dimensions } from 'react-native';
import { getStyles } from '@/styles';

const SCREEN_WIDTH = Dimensions.get('window').width;

interface PopupMenuWrapperProps {
  trigger: (open: () => void) => ReactNode;
  children: ReactNode;
  align?: 'start' | 'end';
  menuWidth?: number;
}

export const PopupMenuWrapper: FC<PopupMenuWrapperProps> = ({
  trigger,
  children,
  align = 'start',
  menuWidth = 220,
}) => {
  const triggerRef = useRef<View>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const open = () => {
    triggerRef.current?.measureInWindow((x, y, width, height) => {
      let left = x;

      if (align === 'end') {
        left = x + width - menuWidth;
      }

      // prevent overflow
      left = Math.max(8, Math.min(left, SCREEN_WIDTH - menuWidth - 6));

      setPosition({
        top: y + height + 6,
        left,
      });

      setVisible(true);
    });
  };

  const close = () => setVisible(false);

  return (
    <>
      <View ref={triggerRef}>{trigger(open)}</View>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable style={getStyles('flex-1')} onPress={close}>
          <View
            style={[
              getStyles('absolute bg-backgroundDefault rounded-12 py-6 z-50'),
              {
                top: position.top,
                left: position.left,
                width: menuWidth,
                elevation: 8,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.15,
                shadowRadius: 12,
              },
            ]}
          >
            {children}
          </View>
        </Pressable>
      </Modal>
    </>
  );
};
