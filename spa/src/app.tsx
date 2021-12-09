import React from "react";

import { Layout, Menu } from "antd";

import * as styles from "./app.less";

const { Header, Footer, Sider, Content } = Layout;
export const App = () => {
  return (
    <Layout className={styles.root}>
      <Sider>
        <Menu>
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
