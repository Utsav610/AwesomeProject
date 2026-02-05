import { FC, ReactNode, useRef, useState } from 'react';
import { View, Modal, Pressable } from 'react-native';
import { getStyles, SCREEN_WIDTH } from '@/styles';

interface OverlayContentWrapperProps {
  triggerPopup: (handlePopupOpen: () => void) => ReactNode;
  children: ReactNode;
  align?: 'start' | 'end';
  overlayWidth?: number;
}

export const OverlayContentWrapper: FC<OverlayContentWrapperProps> = ({
  triggerPopup,
  children,
  align = 'start',
  overlayWidth = 220,
}) => {
  const triggerPopupRef = useRef<View>(null);
  const [visible, setVisible] = useState(false);
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handlePopupOpen = () => {
    triggerPopupRef.current?.measureInWindow((x, y, width, height) => {
      let left = x;

      if (align === 'end') {
        left = x + width - overlayWidth;
      }

      // prevent overflow
      left = Math.max(8, Math.min(left, SCREEN_WIDTH - overlayWidth - 6));

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
      <View ref={triggerPopupRef}>{triggerPopup(handlePopupOpen)}</View>

      <Modal transparent visible={visible} animationType="fade">
        <Pressable style={getStyles('flex-1')} onPress={close}>
          <View
            style={[
              getStyles('absolute bg-backgroundDefault rounded-12 py-6 z-50'),
              {
                top: position.top,
                left: position.left,
                width: overlayWidth,
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
