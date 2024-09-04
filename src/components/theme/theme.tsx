import { useEffect, useState } from "react";

// 主题切换
function Theme () {


  const themeList = [
    {
      label: 'system'
    },
    {
      label: 'light'
    },
    {
      label: 'dark'
    }
  ];

  const Listener = (e: { matches: boolean; }) => {
    const tmpClassName = document.documentElement.className;
    const tmpSt = localStorage.getItem('theme');
    if (tmpSt === 'system') {
      if (e.matches) {
        document.documentElement.classList.replace(tmpClassName,'light')
      }else {
        document.documentElement.classList.replace(tmpClassName,'dark')
      }
    }
  }

  useEffect(() => {
    const theme = window.matchMedia('(prefers-color-scheme: light)');
    theme.addEventListener('change', Listener);
    return () => {
      theme.removeEventListener('change', Listener)
    }
  }, [])

  useEffect(() => {    
    localStorage.getItem('theme') ?? localStorage.setItem('theme', 'system');
    const stTheme = localStorage.getItem('theme');
    if (stTheme) {
      const tmpSelect: any = document.getElementById('select');
      tmpSelect.value = stTheme;
      if (stTheme === 'system') {
        const theme = window.matchMedia('(prefers-color-scheme: light)');
        if (theme.matches) {
          document.documentElement.classList.add('light');
        }else {
          document.documentElement.classList.add('dark');
        }
      }else {
        document.documentElement.classList.add(stTheme);
      }
    }
  }, [])

  const handelThemeChange = (e: { target: { value: string; }; }) => {
    const tmpValue = e.target.value;
    const tmpSelect: any = document.getElementById('select');
    tmpSelect.value = tmpValue;
    const theme = window.matchMedia('(prefers-color-scheme: light)');
    const tmpClassName = document.documentElement.className || '';
    if (tmpValue === 'system') {
      if (theme.matches) {
        document.documentElement.classList.replace(tmpClassName,'light');
      }else {
        document.documentElement.classList.replace(tmpClassName,'dark');
      }
    }else {
      document.documentElement.classList.replace(tmpClassName,tmpValue);
    }
    localStorage.setItem('theme', tmpValue)
  }

  return (
    <div>
      <select id='select' onChange={handelThemeChange}>
        {
          themeList.map((item, index) => {
            return (
              <option key={index} value={item.label}>{item.label}</option>
            )
          })
        }
        
      </select>
    </div>
  )

}

export default Theme