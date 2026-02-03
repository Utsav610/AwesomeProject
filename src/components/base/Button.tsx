import { ActivityIndicator, Pressable, type PressableProps, type ViewStyle } from 'react-native';
import { getStyles } from '@/styles/getStyles';
import { Text } from './Text';
import { theme } from '@/styles';

type ButtonVariant = 'primary' | 'secondary';

export type ButtonProps = PressableProps & {
  title: string;
  variant?: ButtonVariant;
  fullWidth?: boolean;
  onPress?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  loaderColor?: string;
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
  isLoading = false,
  onPress,
  loaderColor = theme.colors.surface,
  ...props
}: ButtonProps) => {
  const baseStyle = 'px-16 py-12 rounded-lg justify-center items-center';
  const widthStyle = fullWidth ? 'w-full' : '';
  const disabledStyle = disabled ? 'opacity-50' : '';

  const containerStyle = getStyles(
    `${baseStyle} ${VARIANT_STYLES[variant]} ${widthStyle} ${disabledStyle}`,
  );

  return (
    <Pressable
      disabled={disabled}
      style={[containerStyle, style as ViewStyle]}
      {...props}
      onPress={onPress}
    >
      {isLoading ? (
        <ActivityIndicator size={'small'} color={loaderColor} />
      ) : (
        <Text weight="semibold" size="base">
          {title}
        </Text>
      )}
    </Pressable>
  );
};
