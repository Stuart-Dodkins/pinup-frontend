import { Link } from '@chakra-ui/layout';
import { AppColors } from '../../../theme';
import { LinkProps } from '@chakra-ui/react';

interface AppLinkProps extends LinkProps {
  text: string;
  url: string;
  fontSize?: string;
}

const AppLink: React.FC<AppLinkProps> = ({
  text,
  url,
  fontSize = '12px',
  ...props
}) => {
  return (
    <Link
      color={AppColors.appTextColor}
      href={url}
      fontSize={fontSize}
      {...props}
      _hover={{
        color: AppColors.highlight,
        transform: 'translateY(-2px)',
      }}
    >
      {text}
    </Link>
  );
};

export default AppLink;
