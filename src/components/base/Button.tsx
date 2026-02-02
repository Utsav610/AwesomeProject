import { Pressable, type PressableProps, type ViewStyle } from 'react-native';
import { getStyles } from '@/styles/getStyles';
import { Text } from './Text';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
};

const VARIANT_STYLES: Record<ButtonVariant, string> = {
  primary: 'bg-primary',
  secondary: 'bg-surface border border-border',
};

export const Button = ({
  title,
  variant = 'primary',
  disabled,
  fullWidth,
  style,
  ...props
}: ButtonProps) => {
  const baseStyle = 'px-16 py-12 rounded-lg justify-center items-center';
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50' : '';

  const containerStyle = getStyles(
    `${baseStyle} ${VARIANT_STYLES[variant]} ${widthStyle} ${disabledStyle}`,
  );

  return (
    <Pressable disabled={disabled} style={[containerStyle, style as ViewStyle]} {...props}>
      <Text weight="semibold" size="base">
        {title}
      </Text>
    </Pressable>
  );
};
