export interface TableTestRow {
  id: string;
  label: string;
  questionCount: number;
  createdDate: string;
  duration: number;
  status: 'NEW' | 'IN_PROGRESS' | 'DONE';
  possibleRun: boolean;
}
