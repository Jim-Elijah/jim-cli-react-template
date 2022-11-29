// modules——各模块入口
import Home from "../modules/Home";
import About from "../modules/About";
import Demo from "../modules/Demo";
import NotFound from "../modules/NotFound";

// components——模块内子路由
import HelloWorld from "../components/Demo/HelloWorld";
import Other from "../components/Demo/Other";

//创建路由
const routes = [
  {
    path: "/",
    component: Home,
    name: "Home",
    meta: {
      isMenu: true,
    },
  },
  {
    path: "/demo",
    component: Demo,
    name: "Demo",
    meta: {
      isMenu: true,
    },
    children: [
      {
        path: "/HelloWorld",
        component: HelloWorld,
        name: "HelloWorld",
        meta: {
          isMenu: true,
        },
      },
      {
        path: "/other",
        component: Other,
        name: "other",
        meta: {
          isMenu: true,
        },
      },
    ],
  },
  {
    path: "/about",
    component: About,
    name: "About",
    meta: {
      isMenu: true,
    },
  },
  {
    path: "*",
    // 路由不存在, 放在最后
    component: NotFound,
    name: "NotFound",
    meta: {
      isMenu: false,
    },
  },
];
export { routes };
