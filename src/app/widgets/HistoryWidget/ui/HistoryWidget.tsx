import { Grid, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import { TableHistory } from './TableHistory';
import { Modal } from '../../../shared/Modal';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import IosShareIcon from '@mui/icons-material/IosShare';

interface Props {
  open: boolean;
  setIsOpenHistory: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export const HistoryWidget = ({ open, setIsOpenHistory }: Props) => {
  return (
    <Modal open={open} setIsOpen={setIsOpenHistory} withCloseIcon={false}>
      <WidgetHeader
        justifyContent="space-between"
        icon={<DoneAllIcon />}
        label="Мои результаты"
      >
        <Grid>
          <IconButton style={{ marginRight: '8px' }}>
            <IosShareIcon />
          </IconButton>
          <IconButton onClick={() => setIsOpenHistory(false)}>
            <CloseIcon />
          </IconButton>
        </Grid>
      </WidgetHeader>
      <Grid paddingTop={2}>
        <TableHistory />
      </Grid>
    </Modal>
  );
};
