import { Space } from 'antd';
import React, { CSSProperties, FC } from "react";
import { GithubOutlined,
    GoogleOutlined,
    FacebookOutlined,
    InstagramOutlined,
    LinkedinOutlined,
    YoutubeOutlined
} from '@ant-design/icons';

export const SidebarComponent: FC = () => {
    return <Space>
        <GithubOutlined />
        <GoogleOutlined />
        <FacebookOutlined />
        <InstagramOutlined />
        <LinkedinOutlined />
        <YoutubeOutlined />
    </Space>
}

const SidebarStyle: CSSProperties = {
    width: '100%',
    textAlign: 'center',
}