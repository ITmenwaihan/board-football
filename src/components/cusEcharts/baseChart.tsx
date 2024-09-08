//基础折线图
import * as echarts from 'echarts/core';
import { 
  GridComponent, 
  TitleComponent, 
  TooltipComponent, 
  LegendComponent, 
  ToolboxComponent,
} from 'echarts/components';
import { LineChart, PieChart, BarChart, ScatterChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { CanvasRenderer } from 'echarts/renderers';
import { useEffect, useRef } from 'react';
import { useSelector } from'react-redux';

echarts.use([
  GridComponent, 
  LineChart, 
  CanvasRenderer, 
  UniversalTransition, 
  TitleComponent, 
  TooltipComponent,
  LegendComponent,
  ToolboxComponent,
  PieChart,
  BarChart,
  ScatterChart
]);

interface ChartProps {
  option: any;
  width?: string;
  height?: string;
}

function BaseChart(props: ChartProps) {
  const {option, width, height} = props
  const chartRef = useRef<HTMLDivElement | null>(null);
  const theme = useSelector((state: any) => state.theme);
  const chartElement = document.documentElement;

  useEffect(() => {
    const chart = echarts.init(chartRef.current, theme.value);
    const handelResize = () => chart.resize({
      width: 'auto',
      height: 'auto'
    });
    const resizeObserver = new ResizeObserver(() => {
      handelResize()
    });
    resizeObserver.observe(chartElement);
    chart.setOption(option);
    return () => {
      chart.dispose();
      resizeObserver.unobserve(chartElement);
    }
  }, [theme, option, width, height])
  return (
    <div ref={chartRef} style={{width: width, height: height, padding: '4px', boxSizing: 'border-box'}}></div>
  )

}

export default BaseChart;