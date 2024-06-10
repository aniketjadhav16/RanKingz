import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';

export default function LoadingButtons({ loading, handleSubmit }) {
  return (
    <Stack direction="row" spacing={2}>
      <LoadingButton
        loading={loading}
        loadingPosition="start"
        startIcon={<SaveIcon />}
        variant="outlined"
        onClick={handleSubmit}
      >
        Submit
      </LoadingButton>
    </Stack>
  );
}
