import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
} from '@chakra-ui/react';
import { AppColors } from '../../theme';
import * as React from 'react';

export interface PanelOptions {
  catchOnCancel?: boolean;
  title?: string;
  noTitle?: boolean;
  render?: (onSubmit: () => void, onCancel: () => void) => React.ReactNode;
  closeButtonColor?: string;
  closeBtnDisplay?: string;
}

interface PanelProps extends PanelOptions {
  open: boolean;
  onSubmit: () => void;
  onClose: () => void;
}

export const Panel: React.FC<PanelProps> = ({
  open,
  title,
  noTitle = false,
  closeButtonColor = 'black',
  closeBtnDisplay = 'block',
  render,
  onSubmit,
  onClose,
}) => {
  return (
    <Drawer isOpen={open} placement='right' onClose={onClose} size={'full'}>
      <DrawerOverlay w={'full'} />
      <DrawerContent h={'100%'}>
        <DrawerCloseButton
          zIndex={5}
          color={closeButtonColor}
          display={closeBtnDisplay}
          pt={2}
        />
        {noTitle ? (
          <></>
        ) : (
          <DrawerHeader
            borderBottomWidth='1px'
            bgColor={AppColors.primary}
            boxShadow={'0px 0px 8px 8px rgba(0, 0, 0, 0.05)'}
          >
            {title}
          </DrawerHeader>
        )}

        <DrawerBody bgColor={AppColors.primary} p={4}>
          {render && render(onSubmit, onClose)}
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};
