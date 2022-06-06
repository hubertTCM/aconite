import React, { useState } from "react";

import { Layout, Menu, Radio, RadioChangeEvent } from "antd";
import i18next from "i18next";
import moment from "moment";

import { GuessNumber } from "./components/guess-number";

import styles from "./app.module.css";
import { Link, Outlet, Route, Routes } from "react-router-dom";

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
          <Menu.Item>
            <Link to="/guess-number">Guess Number</Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Header>
          <div className={styles["language-radio-group"]}>
            <Radio.Group value={language} onChange={changeLocal}>
              <Radio.Button key="en" value="en">
                English
              </Radio.Button>
              <Radio.Button key="cn" value="zh-cn">
                中文
              </Radio.Button>
            </Radio.Group>
          </div>
        </Header>
        <Content>
          <Outlet />
        </Content>
        <Footer>Footer</Footer>
      </Layout>
    </Layout>
  );
};
