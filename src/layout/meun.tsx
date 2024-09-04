import { NavLink } from 'react-router-dom';
import { routers } from '../router/router.ts';
import './index.css'

function Menu () {
  return (
    <>
      {routers.map((item, index) => {
        return (
          <div key={index} className='menu'>
            <NavLink to={item.path} >{item.meta?.title}</NavLink>
          </div>
        )
      })}
    </>
  )

}

export default Menu