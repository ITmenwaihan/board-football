//基础折线图

import * as echarts from 'echarts/core';
import { GridComponent } from 'echarts/components';
import { LineChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';
import { useSelector } from'react-redux';

echarts.use([GridComponent, LineChart, CanvasRenderer, UniversalTransition]);

function BaseLineChart() {
  const chartRef = useRef(null);
  const theme = useSelector((state: any) => state.theme);

  useEffect(() => {
  const chart = echarts.init(chartRef.current, theme.value);
  chart.setOption(option);
  return () => chart.dispose();
  }, [theme])

  const option = {
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: [150, 230, 224, 218, 135, 147, 260],
        type: 'line'
      }
    ]
  };
  return (
    <div ref={chartRef} style={{ width: '600px', height: '400px' }}></div>
  )

}

export default BaseLineChart;