import { NavLink } from 'react-router-dom';
import './index.css'

function Menu () {


  const menuList = [
    {
      name: '主页',
      path: '/'
    },
    {
      name: '大文件上传',
      path: './bigFile'
    }
  ]

  return (
    <>
      {menuList.map((item, index) => {
        return (
          <div key={index} className='menu'>
            <NavLink to={item.path} >{item.name}</NavLink>
          </div>
        )
      })}
    </>
  )

}

export default Menu