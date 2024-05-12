import { WidgetWrapper } from '../../../../../shared/WidgetWrapper';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { WidgetHeader } from '../../../../../shared/WidgetWrapper/ui/WidgetHeader';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';

const valueMonthFormatter = (value: string) => `${value.slice(0, 3)}`;

const chartSetting = {
  yAxis: [
    {
      label: 'Кол-во завершенных тестирований',
      tickMinStep: 1,
    },
  ],
  series: [
    {
      dataKey: 'activity',
      label: 'Кол-во завершенных тестирований',
    },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
      transform: 'translateX(-10px)',
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataset: any = [
  {
    activity: 1,
    month: 'Январь',
  },
  {
    activity: 0,
    month: 'Февраль',
  },
  {
    activity: 2,
    month: 'Март',
  },
  {
    activity: 1,
    month: 'Апрель',
  },
  {
    activity: 0,
    month: 'Май',
  },
  {
    activity: 1,
    month: 'Июнь',
  },
  {
    activity: 2,
    month: 'Июль',
  },
  {
    activity: 0,
    month: 'Август',
  },
  {
    activity: 2,
    month: 'Сентябрь',
  },
  {
    activity: 1,
    month: 'Октябрь',
  },
  {
    activity: 2,
    month: 'Ноябрь',
  },
  {
    activity: 2,
    month: 'Декабрь',
  },
];

export const StatisticWidget = () => {
  return (
    <WidgetWrapper item>
      <WidgetHeader label="Моя статистика" icon={<SignalCellularAltIcon />} />
      <div style={{ width: '100%' }}>
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'month',
              valueFormatter: valueMonthFormatter,
            },
          ]}
          {...chartSetting}
          slotProps={{
            bar: {
              clipPath: `inset(0px round 4px 4px 0px 0px)`,
            },
          }}
          colors={['#ed6c02']}
        />
      </div>
    </WidgetWrapper>
  );
};
