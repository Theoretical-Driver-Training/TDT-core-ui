import { Box } from '@mui/material';
import React from 'react';

interface Props {
  bgColor?: string;
  color?: string;
}

export const Chip: React.FC<React.PropsWithChildren<Props>> = ({
  bgColor = '#3b46b0',
  color = '#fff',
  children,
}) => {
  return (
    <Box
      style={{
        backgroundColor: bgColor,
        borderRadius: '40px',
        display: 'flex',
        alignItems: 'center',
        height: '32px',
        width: 'max-content',
        padding: '4px 12px',
        fontSize: '14px',
        color,
        marginLeft: '8px',
      }}
    >
      {children}
    </Box>
  );
};
