// layout 组件
import './index.css';
import Theme from '../components/theme/theme';
import Menu from './meun';

function Layout () {
  return (
    <>
    <header className='header'>
    <Theme></Theme>
    </header>
    <div className='side'>
      <div className='sideContent'>
        <Menu></Menu>
      </div>
    </div>
    </>
  )
}

export default Layout