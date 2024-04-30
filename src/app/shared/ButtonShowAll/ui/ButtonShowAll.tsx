import { Button, Grid, styled } from '@mui/material';
import React from 'react';

const StyledButton = styled(Button)(({ theme }) => ({
  fontSize: '12px',
  textTransform: 'none',
  padding: theme.spacing(0.5, 2),
}));

interface Props {
  onClick: VoidFunction;
}

export const ButtonShowAll = ({ onClick }: Props) => {
  return (
    <Grid container justifyContent="center" paddingTop={2}>
      <StyledButton onClick={onClick} variant="outlined">
        Посмотреть все
      </StyledButton>
    </Grid>
  );
};
