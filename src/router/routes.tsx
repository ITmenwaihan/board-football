import { RouteObject, useRoutes } from "react-router-dom";
import {routers, routerType} from './router';
import React from 'react'

function Routes () {
  const Element = useRoutes(_renderRouter(routers))
  return Element
}

function _renderRouter (routes: Array<routerType>) {
    return routes.map((item) => {
      let res: any = {...item};
      if (item?.component) {
        const Component = React.lazy(item.component);
        res.element = <React.Suspense fallback={<h2>Loading.......</h2>}>
          <Component></Component>
        </React.Suspense>
      }
      if (item?.children) {
        res.children = _renderRouter(item.children)
      }
      return res
  })
}

export default Routes