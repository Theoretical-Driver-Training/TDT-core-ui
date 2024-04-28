import * as React from 'react';
import { Box, Button, Grid, styled, TextField } from '@mui/material';
import { FormEventHandler } from 'react';

const ResetButton = styled(Button)(() => ({
  width: 140,
}));

const SaveButton = styled(Button)(() => ({
  width: 140,
}));

export const ProfileForm = () => {
  const handleSubmit: FormEventHandler<HTMLDivElement> = (event) => {
    event.preventDefault();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
      <TextField
        margin="normal"
        required
        fullWidth
        id="lastname"
        label="Фамилия"
        name="lastname"
        autoFocus
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="firstname"
        label="Имя"
        name="firstname"
      />
      <TextField
        margin="normal"
        fullWidth
        id="middlename"
        label="Отчество"
        name="middlename"
      />
      <TextField
        margin="normal"
        required
        fullWidth
        id="birthdate"
        label="Дата рождения"
        name="birthdate"
        type="date"
        value="2000-01-01"
      />
      <TextField
        margin="normal"
        fullWidth
        id="height"
        label="Рост"
        name="height"
      />
      <TextField
        margin="normal"
        fullWidth
        id="weight"
        label="Вес"
        name="weight"
      />
      <Grid container justifyContent="flex-end" gap={2}>
        <ResetButton type="reset" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Отмена
        </ResetButton>
        <SaveButton type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
          Сохранить
        </SaveButton>
      </Grid>
    </Box>
  );
};
