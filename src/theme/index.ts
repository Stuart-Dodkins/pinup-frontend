import { extendTheme, ComponentStyleConfig } from '@chakra-ui/react';

const AppColors = {
  primary: '#EEEEEE',
  secondary: '#39a0ed',
  highlight: '#80ffdb',
  appTextColor: '#222222',
};

const buttonConfig: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: '500',
    color: '#EEEEEE',
    rounded: 'md',
    border: `1px solid ${AppColors.secondary}`,
    cursor: 'pointer',
    bgColor: '#222831',
  },
  sizes: {
    xs: {
      fontSize: '12px',
      px: 2,
      py: 1,
    },
    sm: {
      fontSize: '14px',
    },
    md: {
      fontSize: '18px',
      px: 8,
      py: 4,
    },
  },
  variants: {
    ghost: {
      bgColor: 'transparent',
      border: `1px solid ${AppColors.appTextColor}`,
      color: '#EEEEEE',
    },
  },
  defaultProps: {
    size: 'sm',
    variant: 'solid',
  },
};

const theme = extendTheme({
  components: {
    Button: buttonConfig,
    Input: {
      sizes: {
        lg: {
          field: {
            borderRadius: 'none',
          },
        },
        md: {
          field: {
            borderRadius: 'none',
          },
        },
        sm: {
          field: {
            borderRadius: 'none',
          },
        },
        xs: {
          field: {
            borderRadius: 'none',
          },
        },
      },
    },
  },
});

export { AppColors, theme };
