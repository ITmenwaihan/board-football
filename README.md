# React(@18.3) + TypeScript + Vite(@5.4) + react-router(@6)
# 项目一些功能
## 主题切换
  使用window.matchMedia('(prefers-color-scheme: light)') 来判断当前的主题
  然后在css中设置 html.dark  html.light 两个类  使用 document.documentElement.classList 设置html的class
  使用localStorage保存当前的theme
## 使用react-router来管理路由



