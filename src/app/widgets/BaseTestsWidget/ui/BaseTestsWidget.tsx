import React from 'react';
import QuizIcon from '@mui/icons-material/Quiz';
import { Grid, IconButton, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { rows } from '../lib/rows';
import { cells } from '../lib/cells';
import { getStatusText } from '../lib/statuses';
import { BaseTestsToolbar } from './BaseTestsToolbar';
import { TableTestRow } from '../types';
import PsychologyIcon from '@mui/icons-material/Psychology';
import { getComparator, Order } from '../../../shared/Table/lib/comparator';
import { stableSort } from '../../../shared/Table/lib/sort';
import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import { TableHeader } from '../../../shared/Table';
import { Chip } from '../../../shared/Chip';

interface Props {
  setIsOpenQuestion: (
    value: ((prevState: boolean) => boolean) | boolean
  ) => void;
  setIsOpenAnswer: (value: ((prevState: boolean) => boolean) | boolean) => void;
}

export const BaseTestsWidget = ({
  setIsOpenQuestion,
  setIsOpenAnswer,
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
      <WidgetHeader icon={<QuizIcon />} label="Список тестов" />
      <BaseTestsToolbar />
      <TableContainer>
        <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
          <TableHeader<TableTestRow>
            order={order}
            orderBy={orderBy}
            cells={cells}
            sortedCells={['label']}
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
                    <Grid container alignItems="center">
                      <PsychologyIcon style={{ marginRight: '8px' }} />
                      {row.label}
                    </Grid>
                  </TableCell>
                  <TableCell align="left" style={{ padding: '16px' }}>
                    <Typography variant="body2">
                      {row.status === 'DONE' ? (
                        <Chip bgColor="#ed6c02">
                          {getStatusText(row.status)}
                        </Chip>
                      ) : (
                        <Chip>{getStatusText(row.status)}</Chip>
                      )}
                    </Typography>
                  </TableCell>
                  <TableCell align="left" style={{ padding: '16px' }}>
                    <IconButton
                      style={{
                        color: row.status === 'DONE' ? '#ed6c02' : '#3b46b0',
                      }}
                      onClick={
                        index === 0
                          ? () => setIsOpenQuestion(true)
                          : () => setIsOpenAnswer(true)
                      }
                    >
                      {row.status === 'DONE' ? (
                        <CheckCircleOutlineIcon />
                      ) : (
                        <PlayCircleOutlineIcon />
                      )}
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
