import React from 'react';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import QuizIcon from '@mui/icons-material/Quiz';
import { IconButton, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import {
  getComparator,
  Order,
} from '../../../../../shared/Table/lib/comparator';
import { TableHeader } from '../../../../../shared/Table';
import { stableSort } from '../../../../../shared/Table/lib/sort';
import { rows } from '../lib/rows';
import { cells } from '../lib/cells';
import { getStatusText } from '../lib/statuses';
import { TableTestsToolbar } from './TableTestsToolbar';
import { TableTestRow } from '../types';

interface Props {
  setIsOpenTest: (value: ((prevState: boolean) => boolean) | boolean) => void;
  setIsOpenQuestion: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
}

export const TableTestsWidget = ({
  setIsOpenTest,
  setIsOpenQuestion,
}: Props) => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof TableTestRow | null>(null);

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TableTestRow
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
    <WidgetWrapper>
      <WidgetHeader icon={<QuizIcon />} label="Доступные тесты" />
      <TableTestsToolbar />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader<TableTestRow>
            order={order}
            orderBy={orderBy}
            cells={cells}
            sortedCells={['label', 'duration', 'createdDate', 'questionCount']}
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
                    {row.questionCount}
                  </TableCell>
                  <TableCell align="left" style={{ padding: '16px' }}>
                    {row.duration} минут
                  </TableCell>
                  <TableCell align="left" style={{ padding: '16px' }}>
                    <Typography variant="body2">
                      {getStatusText(row.status)}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" style={{ padding: '16px' }}>
                    {row.createdDate}
                  </TableCell>
                  <TableCell align="left" style={{ padding: '16px' }}>
                    <IconButton
                      style={{ color: '#ed6c02' }}
                      onClick={
                        index === 0
                          ? () => setIsOpenQuestion(true)
                          : () => setIsOpenTest(true)
                      }
                    >
                      <PlayCircleOutlineIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </WidgetWrapper>
  );
};
