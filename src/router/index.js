// modules——各模块入口
import Home from '../modules/Home';
import About from '../modules/About';
import Demo from '../modules/Demo';
import NotFound from '../modules/NotFound';

// components——模块内子路由
import HelloWorld from '../components/Demo/HelloWorld';
import Other from '../components/Demo/Other';

//创建路由
const routes = [
  {
    path: '/',
    component: Home,
    name: 'Home',
    meta: {
      isMenu: true,
    },
  },
  {
    path: '/demo',
    component: Demo,
    name: 'Demo',
    meta: {
      isMenu: true,
    },
    children: [
      {
        path: '/HelloWorld',
        component: HelloWorld,
        name: 'HelloWorld',
        meta: {
          isMenu: true,
        },
      },
      {
        path: '/other',
        component: Other,
        name: 'other',
        meta: {
          isMenu: true,
        },
      },
      {
        path: '/sub2-1',
        name: 'sub2-1',
        component: () => <div>sub2-1</div>,
        meta: {
          isMenu: true,
        },
        children: [
          {
            path: '/sub3-1',
            name: 'sub3-1',
            component: () => <div>sub3-1</div>,
            meta: {
              isMenu: true,
            },
          },
          {
            path: '/sub3-2',
            name: 'sub3-2',
            component: () => <div>sub3-2</div>,
            meta: {
              isMenu: false,
            },
          },
        ],
      },
      {
        path: '/sub2-2',
        name: 'sub2-2',
        component: () => <div>sub2-2</div>,
        meta: {
          isMenu: true,
        },
      },
      {
        path: '/sub2-3',
        name: 'sub2-3',
        component: () => <div>sub2-3</div>,
        meta: {
          isMenu: false,
        },
      },
    ],
  },
  {
    path: '/about',
    component: About,
    name: 'About',
    meta: {
      isMenu: true,
    },
  },
  {
    path: '*',
    // 路由不存在, 放在最后
    component: NotFound,
    name: 'NotFound',
    meta: {
      isMenu: false,
    },
  },
];
export { routes };
