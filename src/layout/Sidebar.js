import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Menu } from "antd";
import { routes } from "../router";

class CommonSider extends Component {
  constructor(props) {
    super(props);
    let menus = routes.filter((route) => route.meta.isMenu);
    menus = menus.map((menu) => {
      let { children = [] } = menu;
      if (!children.length) {
        return { ...menu, label: menu.name, key: menu.path };
      }
      console.log("menu children", menu.children);
      children = children.map((item) => ({
        ...item,
        label: item.name,
        // key: `${menu.path}${item.path}`,
        key: item.path,
      }));
      console.log("menu children1", menu.children);
      return { ...menu, label: menu.name, key: menu.path, children };
    });
    console.log("menus", menus);
    this.state = {
      menus,
      selectedKeys: ["/"],
    };
  }
  static getDerivedStateFromProps(nextProps, prevState) {
    const {
      history: { location },
    } = nextProps;
    const { pathname } = location;
    const { selectedKeys } = prevState;
    console.log("----", pathname, selectedKeys[0]);
    if (selectedKeys[0] !== pathname) {
      return {
        selectedKeys: [pathname],
      };
    }
    return null;
  }
  menuClickHandler = ({ key }) => {
    console.log("click", key);
    this.setState({
      selectedKeys: [key],
    });
    this.props.history.push(key);
  };

  render() {
    const { menus, selectedKeys } = this.state;
    console.log("key", selectedKeys, menus);
    return (
      <Menu
        items={menus}
        mode="inline"
        theme={"dark"}
        onClick={this.menuClickHandler}
        selectedKeys={selectedKeys}
      />
    );
  }
}
// 用HOC withRouter包裹组件, 以在组件内使用history
export default withRouter(CommonSider);
