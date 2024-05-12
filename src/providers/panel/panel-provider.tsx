import * as React from 'react';
import { Panel, PanelOptions } from './panel';

const ClientPanelServiceContext = React.createContext<
  (options: PanelOptions) => Promise<void>
>(Promise.reject);

export const usePanel = () => React.useContext(ClientPanelServiceContext);
export const PanelServiceProvider = ({ children }: any) => {
  const [dialogState, setDialogState] =
    React.useState<PanelOptions | null>(null);

  const awaitingPromiseRef = React.useRef<{
    resolve: () => void;
    reject: () => void;
  }>();

  const openConfirmation = (options: PanelOptions) => {
    setDialogState(options);
    return new Promise<void>((resolve, reject) => {
      awaitingPromiseRef.current = { resolve, reject };
    });
  };

  const handleClose = () => {
    if (
      dialogState &&
      dialogState.catchOnCancel &&
      awaitingPromiseRef.current
    ) {
      awaitingPromiseRef.current.reject();
    }

    // onClose();
    setDialogState(null);
  };

  const handleSubmit = () => {
    if (awaitingPromiseRef.current) {
      awaitingPromiseRef.current.resolve();
    }

    // onClose();
    setDialogState(null);
  };

  return (
    <>
      <ClientPanelServiceContext.Provider
        value={openConfirmation}
        children={children}
      />

      <Panel
        open={Boolean(dialogState)}
        onSubmit={handleSubmit}
        onClose={handleClose}
        {...dialogState}
      />
    </>
  );
};