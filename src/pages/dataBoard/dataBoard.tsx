import LineChart from './lineChart';
import AreaChart from './areaChart';
import PieChart from './pieChart';
import BarChart from './barChart';
import ScatterChart from './scatterChart';
import './index.css';

function DataBoard () {
  return (
    <div className='chartContent'>
      <LineChart></LineChart>
      <AreaChart></AreaChart>
      <PieChart></PieChart>
      <BarChart></BarChart>
      <ScatterChart></ScatterChart>
    </div>
  )

}

export default DataBoard