import { axisClasses } from '@mui/x-charts/ChartsAxis';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, IconButton, Typography } from '@mui/material';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import { WidgetWrapper } from '../../../shared/WidgetWrapper';
import { WidgetHeader } from '../../../shared/WidgetWrapper/ui/WidgetHeader';
import { Chip } from '../../../shared/Chip';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { Tooltip } from '../../../shared/Tooltip';
import { useState } from 'react';
import './StatisticWidget.css';
import dayjs from 'dayjs';

const levels = [
  '',
  'Очень низкий',
  'Низкий',
  'Средний',
  'Высокий',
  'Очень высокий',
];

const chartSetting = {
  yAxis: [
    {
      min: 1,
      max: 5,
      label: '',
      dataKey: 'label',
      valueFormatter: (value: any) => {
        return value;
      },
    },
  ],
  series: [
    {
      dataKey: 'level',
      label: 'Уровень функциональной готовности',
      valueFormatter: (value: any) => {
        return levels[value];
      },
    },
  ],
  height: 300,
  sx: {
    [`& .${axisClasses.left} .${axisClasses.root}`]: {
      transform: 'translateX(100px)',
    },
  },
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const dataset: any = [
  {
    level: 4,
    label: 'Высокий',
    date: '06 мая',
  },
  {
    level: 3,
    label: 'Средний',
    date: '07 мая',
  },
  {
    level: 4,
    label: 'Высокий',
    date: '08 мая',
  },
  {
    level: 5,
    label: 'Очень высокий',
    date: '09 мая',
  },
  {
    level: 3,
    label: 'Средний',
    date: '10 мая',
  },
  {
    level: 2,
    label: 'Низкий',
    date: '11 мая',
  },
  {
    level: 1,
    label: 'Очень низкий',
    date: '12 мая',
  },
];

export const StatisticWidget = () => {
  const [isOpenCalendar, setIsOpenCalendar] = useState(false);

  return (
    <WidgetWrapper
      container
      direction="column"
      justifyContent="space-between"
      minHeight="100%"
      item
    >
      <WidgetHeader
        label="Уровень функциональной готовности за период"
        subTitle={
          <Box display="flex" alignItems="center">
            <Chip>
              <Typography>06.05.2024 - 12.05.2024</Typography>
            </Chip>
            <IconButton
              size="small"
              style={{
                marginLeft: '8px',
                backgroundColor: '#3b46b0',
                color: '#fff',
              }}
              onClick={() => setIsOpenCalendar((prev) => !prev)}
            >
              <Tooltip
                open={isOpenCalendar}
                onClose={() => setIsOpenCalendar(false)}
                tooltipChildren={<StaticDateRangePicker />}
              >
                <CalendarMonthIcon fontSize="medium" />
              </Tooltip>
            </IconButton>
          </Box>
        }
        icon={<SignalCellularAltIcon />}
      />
      <div style={{ width: '100%' }}>
        <BarChart
          dataset={dataset}
          xAxis={[
            {
              scaleType: 'band',
              dataKey: 'date',
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
