import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CloseIcon from '@mui/icons-material/Close';
import { Modal } from '../../../shared/Modal';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';

interface Props {
  open: boolean;
  setIsOpenQuestion: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export const QuestionWidget = ({ open, setIsOpenQuestion }: Props) => {
  return (
    <Modal
      open={open}
      setIsOpen={setIsOpenQuestion}
      withCloseIcon={false}
      width={490}
    >
      <WidgetHeader
        justifyContent="space-between"
        icon={<PsychologyIcon />}
        label="Таблицы Шульте"
      >
        <IconButton onClick={() => setIsOpenQuestion(false)}>
          <CloseIcon />
        </IconButton>
      </WidgetHeader>
      <Grid container paddingTop={4} gap={1}>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">15</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">8</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">6</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">14</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">11</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">2</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">7</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">16</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">13</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">9</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">1</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">3</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">4</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">5</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">12</Typography>
        </Grid>
        <Grid
          container
          alignItems="center"
          justifyContent="center"
          item
          xs={3}
          style={{
            border: '1px solid black',
            minWidth: 100,
            maxWidth: 100,
            height: 100,
          }}
        >
          <Typography variant="h4">10</Typography>
        </Grid>
      </Grid>
    </Modal>
  );
};
