import React from 'react';
import { Order } from '../lib/comparator';
import { TableTestCell } from '../types';
import {
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Typography,
} from '@mui/material';

interface Props<R> {
  order: Order;
  orderBy: keyof R | null;
  cells: TableTestCell[];
  sortedCells: Array<keyof R>;
  handleRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof R
  ) => void;
}

export const TableHeader = <R,>({
  order,
  orderBy,
  cells,
  sortedCells,
  handleRequestSort,
}: Props<R>) => {
  const createSortHandler =
    (property: keyof R) => (event: React.MouseEvent<unknown>) => {
      handleRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {cells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {sortedCells.includes(headCell.id as any) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={() => {
                  createSortHandler(headCell.id as any);
                }}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <Typography variant="body2">{headCell.label}</Typography>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
