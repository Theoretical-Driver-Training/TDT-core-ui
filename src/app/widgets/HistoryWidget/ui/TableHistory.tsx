import React from 'react';
import { TableHistoryRow } from '../types';
import { Table, TableContainer } from '@mui/material';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import { rows } from '../lib/rows';
import { cells } from '../lib/cells';
import { getComparator, Order } from '../../../shared/Table/lib/comparator';
import { stableSort } from '../../../shared/Table/lib/sort';
import { TableHeader } from '../../../shared/Table';

export const TableHistory = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof TableHistoryRow | null>(
    null
  );

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TableHistoryRow
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)),
    [order, orderBy]
  );

  return (
    <TableContainer>
      <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
        <TableHeader<TableHistoryRow>
          order={order}
          orderBy={orderBy}
          cells={cells}
          sortedCells={['label', 'duration', 'finishDate']}
          handleRequestSort={handleRequestSort}
        />
        <TableBody>
          {visibleRows.map((row, index) => {
            const labelId = `enhanced-table-checkbox-${index}`;

            return (
              <TableRow
                hover
                role="checkbox"
                tabIndex={-1}
                key={row.id}
                sx={{ cursor: 'pointer' }}
              >
                <TableCell
                  component="th"
                  id={labelId}
                  scope="row"
                  padding="none"
                  align="left"
                  style={{ padding: '16px' }}
                >
                  {row.label}
                </TableCell>
                <TableCell align="left" style={{ padding: '16px' }}>
                  {row.duration} минут
                </TableCell>
                <TableCell align="left" style={{ padding: '16px' }}>
                  {row.finishDate}
                </TableCell>
                <TableCell align="left" style={{ padding: '16px' }}>
                  {row.count}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
