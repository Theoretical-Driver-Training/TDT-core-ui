import React from 'react';
import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import QuizIcon from '@mui/icons-material/Quiz';
import { Grid, TableHead, TableSortLabel } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof TableTestItem>(
  order: Order,
  orderBy: Key
): (
  a: { [key in Key]: number | string },
  b: { [key in Key]: number | string }
) => number {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort<T>(
  array: readonly T[],
  comparator: (a: T, b: T) => number
): T[] {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
  id: keyof TableTestItem;
  label: string;
  numeric: boolean;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'label',
    numeric: false,
    label: 'Наименование',
  },
  {
    id: 'questionCount',
    numeric: false,
    label: 'Кол-во вопросов',
  },
  {
    id: 'duration',
    numeric: false,
    label: 'Длительность',
  },
  {
    id: 'status',
    numeric: false,
    label: 'Статус',
  },
  {
    id: 'createdDate',
    numeric: false,
    label: 'Дата добавления',
  },
];

interface TableTestItem {
  id: string;
  label: string;
  questionCount: number;
  createdDate: string;
  duration: number;
  status: 'NEW' | 'IN_PROGRESS' | 'DONE';
}

const rows: TableTestItem[] = [
  {
    id: '1',
    label: 'EQ-тестирование',
    questionCount: 42,
    createdDate: '20.04.2024',
    duration: 40,
    status: 'IN_PROGRESS',
  },
  {
    id: '2',
    label: 'Тест Айзенка',
    questionCount: 57,
    createdDate: '19.03.2024',
    duration: 60,
    status: 'NEW',
  },
];

interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof TableTestItem
  ) => void;
  order: Order;
  orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler =
    (property: keyof TableTestItem) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="left"
            padding={'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            {['label', 'questionCount', 'createdDate', 'duration'].includes(
              headCell.id
            ) ? (
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                {headCell.label}
              </TableSortLabel>
            ) : (
              <>{headCell.label}</>
            )}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

const statusesMap: Record<TableTestItem['status'], string> = {
  NEW: 'Новый',
  IN_PROGRESS: 'В прогрессе',
  DONE: 'Завершен',
};

const getStatusText = (status: TableTestItem['status']) => {
  return statusesMap[status];
};

export const TableTestsWidget = () => {
  const [order, setOrder] = React.useState<Order>('asc');
  const [orderBy, setOrderBy] = React.useState<keyof TableTestItem>('duration');

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof TableTestItem
  ) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const emptyRows = 0;

  const visibleRows = React.useMemo(
    () => stableSort(rows, getComparator(order, orderBy)) as TableTestItem[],
    [order, orderBy]
  );

  return (
    <WidgetWrapper>
      <WidgetHeader icon={<QuizIcon />} label="Доступные тесты" />
      <Grid paddingTop={2}>
        <TableContainer>
          <Table sx={{ minWidth: 750 }} aria-labelledby="tableTitle">
            <EnhancedTableHead
              order={order}
              orderBy={orderBy}
              onRequestSort={handleRequestSort}
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
                      {getStatusText(row.status)}
                    </TableCell>
                    <TableCell align="left" style={{ padding: '16px' }}>
                      {row.createdDate}
                    </TableCell>
                  </TableRow>
                );
              })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Grid>
    </WidgetWrapper>
  );
};
