import Link from 'next/link';
import React, { FC } from "react";
import { Layout, Menu } from 'antd';

const { Header } = Layout;

interface PageHeaderProps {
  defaultTab?: string;
};

const PageHeader: FC<PageHeaderProps> = ({ defaultTab = 'home' }) => {
  return <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultTab]}>
        <Menu.Item key="home">
          <Link href="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="blog">
          <Link href="/blog">Blog</Link>
        </Menu.Item>
        <Menu.Item key="projects">
          <Link href="/projects">Projects</Link>
        </Menu.Item>
        <Menu.Item key="publications">
          <Link href="/publications">Publications</Link>
        </Menu.Item>
        <Menu.Item key="materials">
          <Link href="/materials">Course Materials</Link>
        </Menu.Item>
      </Menu>
    </Header>
};

export default PageHeader;