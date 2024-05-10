import { Button, ButtonProps } from '@chakra-ui/react';
import { AppColors } from '../../../theme';

export type AppButtonSizes = 'xs' | 'sm' | 'md' | 'lg';
export type AppButtonVariants = 'solid' | 'ghost';

export type AppbuttonProps = {
  bgColor?: string;
  color?: string;
  size?: AppButtonSizes;
  label?: string;
  variant?: AppButtonVariants;
} & ButtonProps;

const AppButton: React.FC<AppbuttonProps> = ({
  bgColor,
  color = AppColors.appTextColor,
  size = 'md',
  variant = 'solid',
  children,
  ...props
}) => {
  return (
    <Button
      bgColor={AppColors.primary}
      color={color}
      size={size}
      _hover={{
        transform: 'translateY(-2px)',
        boxShadow: `4px 4px 0 0 ${AppColors.highlight}`,
      }}
      {...props}
    >
      {children}
    </Button>
  );
};

export default AppButton;