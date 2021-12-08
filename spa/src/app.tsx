import React from "react";

import { Layout, Menu } from "antd";
import "antd/dist/antd.css";

const { Header, Footer, Sider, Content } = Layout;
export const App = () => {
  return (
    <Layout className="site-layout-background">
      <Sider>
        <Menu style={{ height: "100%" }}>
          <Menu.Item>Menu 1</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
