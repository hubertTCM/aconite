import React, { useState } from "react";

import { Layout, Menu, Radio, RadioChangeEvent } from "antd";
import i18next, { i18n } from "i18next";
import moment from "moment";

import { GuessNumber } from "./components/guess-number";

// antd i18n: https://ant.design/components/config-provider/
const { Header, Footer, Sider, Content } = Layout;
type Language = "en" | "zh-cn";
export const App = () => {
  const [language, setLanguage] = useState<Language>("en");
  const changeLocal = (e: RadioChangeEvent) => {
    const selectedLanaguage = (e.target.value as Language) || "en";
    if (selectedLanaguage === "en") {
      moment.locale("en");
      i18next.changeLanguage("en");
    } else {
      moment.locale("zh-cn");
      i18next.changeLanguage("cn");
    }
    setLanguage(selectedLanaguage);
  };
  return (
    <Layout>
      <Sider>
        <Menu>
          <Menu.Item>Menu 1</Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <Radio.Group value={language} onChange={changeLocal}>
            <Radio.Button key="en" value="en">
              English
            </Radio.Button>
            <Radio.Button key="cn" value="zh-cn">
              中文
            </Radio.Button>
          </Radio.Group>
        </Header>
        <Content>
          <GuessNumber />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
