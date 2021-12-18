import React from "react";

import { Layout, Menu } from "antd";

import { GuessNumber } from "@src/components/guess-number";

// less export type: https://www.npmjs.com/package/typed-less-modules
// https://github.com/webpack-contrib/css-loader#auto
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
