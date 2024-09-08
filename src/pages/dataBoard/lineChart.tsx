
import BaseChart from '@/components/cusEcharts/baseChart';
function LineChart () {
  const lineOption = {
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
    <BaseChart option={lineOption} width='50%' height='400px'></BaseChart>
  )
}

export default LineChart;