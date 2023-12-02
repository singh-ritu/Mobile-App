import React, { useState } from "react";
import Home from "./Home";

import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  HomeOutlined,
  LikeOutlined,
  SaveOutlined,
} from "@ant-design/icons";
import { Layout, Menu, Button, theme } from "antd";
const { Header, Sider, Content } = Layout;
const Sidebar = (props) => {
  const [collapsed, setCollapsed] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Layout className="side-details">
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={[
            {
              key: "1",
              icon: (
                <HomeOutlined
                  onClick={() => {
                    props.handleIcons("1");
                  }}
                />
              ),
              label: "HOME",
            },
            {
              key: "2",
              icon: (
                <UserOutlined
                  onClick={() => {
                    props.handleIcons("2");
                  }}
                />
              ),
              label: "MY PROFILE",
            },
            {
              key: "3",
              icon: (
                <LikeOutlined
                  onClick={() => {
                    props.handleIcons("3");
                  }}
                />
              ),
              label: "MY LIKES",
            },
            {
              key: "4",
              icon: (
                <UploadOutlined
                  onClick={() => {
                    props.handleIcons("4");
                  }}
                />
              ),
              label: "MY POSTS",
            },
            {
              key: "5",
              icon: (
                <SaveOutlined
                  onClick={() => {
                    props.handleIcons("5");
                  }}
                />
              ),
              label: "MY BOOKMARKS",
            },
          ]}
        />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: "16px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
          }}
        >
          {props.selectedKey === "1" && <Home />}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Sidebar;
