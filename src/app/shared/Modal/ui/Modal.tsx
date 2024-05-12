import React from 'react';
import {
  Box,
  Fade,
  Grid,
  IconButton,
  Modal as MaterialModal,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface Props {
  open: boolean;
  setIsOpen: (value: ((prevState: boolean) => boolean) | boolean) => void;
  withCloseIcon?: boolean;
  width?: number;
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  borderRadius: '12px',
  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
  p: 4,
};

export const Modal: React.FC<React.PropsWithChildren<Props>> = ({
  open,
  setIsOpen,
  withCloseIcon = true,
  width,
  children,
}) => {
  const modalWidth = width + 'px' ?? '600px';

  return (
    <MaterialModal open={open} onClose={() => setIsOpen(false)}>
      <Fade in={open}>
        <Box sx={{ ...style, width: modalWidth }}>
          {withCloseIcon && (
            <Grid container justifyContent="flex-end">
              <IconButton onClick={() => setIsOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Grid>
          )}
          {children}
        </Box>
      </Fade>
    </MaterialModal>
  );
};
