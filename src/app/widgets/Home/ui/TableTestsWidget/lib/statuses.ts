import { TableTestRow } from '../types';

const statusesMap: Record<TableTestRow['status'], string> = {
  NEW: 'Новый',
  IN_PROGRESS: 'В прогрессе',
  DONE: 'Завершен',
};

export const getStatusText = (status: TableTestRow['status']) => {
  return statusesMap[status];
};
