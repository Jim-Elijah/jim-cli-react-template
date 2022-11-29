import React, { Component } from "react";
import { Switch, Redirect } from "react-router-dom";
import { Layout } from "antd";
import { routes } from "../router";
import renderRoute from "../utils/renderRoute";
import CommonSider from "./Sidebar";

const { Header, Sider, Content, Footer } = Layout;

export default class CommonLayout extends Component {
  render() {
    return (
      <Layout style={{ height: "100%" }}>
        <Header>Jim's CLI react template</Header>
        <Layout>
          <Sider>
            <CommonSider />
          </Sider>
          <Layout>
            <Content>
              <Switch>
                {routes.map((route) => renderRoute(route))}
                <Redirect from="/home" to="/" />
              </Switch>
            </Content>
            <Footer>footer @{new Date().getFullYear()} by Jim</Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
