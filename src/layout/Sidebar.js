import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import { routes } from '../router';

class CommonSider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: routes,
      selectedKeys: ['/'],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      history: { location },
    } = nextProps;
    const { pathname } = location;
    const { selectedKeys } = prevState;
    console.log('----', pathname, selectedKeys[0]);
    if (selectedKeys[0] !== pathname) {
      return {
        selectedKeys: [pathname],
      };
    }
    return null;
  }

  renderSubMenu = ({ path, name, children, meta = {} }) =>
    meta.isMenu ? (
      <Menu.SubMenu key={path} label={name} title={name}>
        {children.map((item) =>
          item.children && item.children.length
            ? this.renderSubMenu(item)
            : this.renderMenuItem(item)
        )}
      </Menu.SubMenu>
    ) : (
      ''
    );

  renderMenuItem = ({ path, name, meta = {} }) =>
    meta.isMenu ? (
      <Menu.Item key={path} label={name}>
        {name}
      </Menu.Item>
    ) : (
      ''
    );

  menuClickHandler = ({ key }) => {
    console.log('click', key);
    this.setState({
      selectedKeys: [key],
    });
    this.props.history.push(key);
  };

  render() {
    const { menus, selectedKeys } = this.state;
    console.log('key', selectedKeys, menus);
    return (
      <Menu
        mode="inline"
        theme={'dark'}
        onClick={this.menuClickHandler}
        selectedKeys={selectedKeys}
      >
        {menus &&
          menus.map((item) => {
            return item.children && item.children.length > 0
              ? this.renderSubMenu(item)
              : this.renderMenuItem(item);
          })}
      </Menu>
    );
  }
}
// 用HOC withRouter包裹组件, 以在组件内使用history
export default withRouter(CommonSider);
