import { Route } from "react-router-dom";

export default function renderRoute(route) {
  const { children = [], ...rest } = route;
  const retRoute = <Route {...rest} exact key={route.path}></Route>
  // 没有子路由
  if (!children.length) {
    return retRoute;
  }
  // 有子路由, 递归
  let tmp = children.map((child) => renderRoute(child));
  tmp.unshift(retRoute)
  return tmp
}
