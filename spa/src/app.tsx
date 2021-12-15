import React from "react";

import { Layout, Menu } from "antd";

import { GuessNumber } from "@src/components/guess-number";

const { Header, Footer, Sider, Content } = Layout;
export const App = () => {
  return (
    <Layout>
      <Sider>
        <Menu>
          <Menu.Item>Menu 1</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>
          <GuessNumber />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
