export interface TableTestRow {
  id: string;
  label: string;
  status: 'NEW' | 'IN_PROGRESS' | 'DONE';
  possibleRun: boolean;
}
