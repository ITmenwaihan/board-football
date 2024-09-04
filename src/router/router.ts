

export interface routerType {
  path: string,
  component: any,
  meta?: {
    title?: string,
    needLogin?: boolean
  },
  children?: Array<routerType>
}


const routers: Array<routerType> = [
  {
    path: '/',
    component: () => import('../App'),
    meta: {
      title: '主页'
    },
    children: [
      {
        path: '/dataBoard',
        component: () => import('../pages/dataBoard/dataBoard') ,
        meta: {
          title: '数据看板'
        }
      },
      {
        path: '/dropList',
        component: import('../pages/dropList/dropList') ,
        meta: {
          title: '拖拽列表'
        }
      },
    ]
  },
];

export {routers}