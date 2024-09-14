import LineChart from './lineChart';
import AreaChart from './areaChart';
import PieChart from './pieChart';
import BarChart from './barChart';
import ScatterChart from './scatterChart';
import './index.css';
import download from '@/assets/download.png';
import jupiter from '@/assets/JWST_2022-07-27_Jupiter_2color.png';
import { downloadPdf } from '@/utils/downloadPdf';

const imgURl1 = 'https://gips2.baidu.com/it/u=853190258,2588232240&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=720';
const imgURl2 = 'https://gips3.baidu.com/it/u=617385017,3644165978&fm=3028&app=3028&f=JPEG&fmt=auto?w=1280&h=960';

function DataBoard () {
  const handelDownloadClick = () => {
    downloadPdf('chartContent', 'board')
  }

  return (
   <>
   <div>
    <div onClick={handelDownloadClick} title={'下载图表'} className='downloadIcon'>
      <img src={download} alt="" />
    </div>
   </div>
    <div className='chartContent'>
      <LineChart></LineChart>
      <AreaChart></AreaChart>
      <PieChart></PieChart>
      <BarChart></BarChart>
      <ScatterChart></ScatterChart>
      <div style={{ width: '50%', height: '400px'}}>
        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={jupiter} alt="" />
      </div>
      <div style={{ width: '50%', height: '400px'}}>
        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={imgURl1} alt="" />
      </div>
      <div style={{ width: '50%', height: '400px'}}>
        <img style={{width: '100%', height: '100%', objectFit: 'cover'}} src={imgURl2} alt="" />
      </div>
    </div>
   </>
  )
}

export default DataBoard