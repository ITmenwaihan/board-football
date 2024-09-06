// layout 组件
import './index.css';
import Theme from '../components/theme/theme';
import Menu from './meun';
import { Outlet } from 'react-router-dom';

function Layout () {
  return (
    <>
    <header className='header'>
      <Theme></Theme>
    </header>
    <main className='mainContent'>
      <Outlet></Outlet>
    </main>
    <div className='side'>
      <div className='sideContent'>
        <Menu></Menu>
      </div>
    </div>
    </>
  )
}

export default Layout