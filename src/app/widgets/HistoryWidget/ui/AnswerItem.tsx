import { Grid, IconButton, Typography } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import React, { useState } from 'react';
import { Tooltip } from '../../../shared/Tooltip';
import { Chip } from '../../../shared/Chip';

interface Props {
  question: string;
  questionText: string;
  answerChipText: string;
}

export const AnswerItem = ({
  question,
  questionText,
  answerChipText,
}: Props) => {
  const [answerOpen, setAnswerOpen] = useState(false);

  return (
    <Grid container item justifyContent="space-between">
      <Grid container item alignItems="center" xs={6}>
        <Typography>{question}</Typography>
        <Tooltip
          open={answerOpen && !!questionText}
          placement="top"
          onClose={() => setAnswerOpen(false)}
          tooltipChildren={<Typography>{questionText}</Typography>}
        >
          <IconButton
            style={{ color: '#fff' }}
            onClick={() => setAnswerOpen(true)}
          >
            <InfoIcon />
          </IconButton>
        </Tooltip>
      </Grid>
      <Grid container item alignItems="center" justifyContent="flex-end" xs={6}>
        <Chip bgColor="#fff" color="#3b46b0">
          {answerChipText}
        </Chip>
      </Grid>
    </Grid>
  );
};
