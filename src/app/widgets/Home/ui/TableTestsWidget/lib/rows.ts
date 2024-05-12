import { TableTestRow } from '../types';

export const rows: TableTestRow[] = [
  {
    id: '1',
    label: 'EQ-тестирование',
    questionCount: 42,
    createdDate: '20.04.2024',
    duration: 40,
    status: 'IN_PROGRESS',
    possibleRun: true,
  },
  {
    id: '2',
    label: 'Тест Айзенка',
    questionCount: 57,
    createdDate: '19.03.2024',
    duration: 60,
    status: 'NEW',
    possibleRun: true,
  },
];
