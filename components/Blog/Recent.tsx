import { recentItems } from './news';
import React, { CSSProperties, FC } from "react";
import { List, Avatar, Space, Typography } from 'antd';
import { UserOutlined, BellOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const Recent: FC = () => {
    return <>
        <Title level={2}>News and Updates</Title>
        <List
            itemLayout="horizontal"
            dataSource={recentItems}
            renderItem={item => (
                <List.Item
                actions={[
                    <Space>{<BellOutlined />}{item.date}</Space>
                ]}>
                    <List.Item.Meta
                        key={item.id}
                        description={item.content}
                        title={<a href={item.link}>{item.title}</a>}
                        avatar={<Avatar style={AvatarStyle} icon={<UserOutlined />} />}                
                    />
                </List.Item>
            )}
        />
    </>    
}

const AvatarStyle: CSSProperties = {
    backgroundColor: 'rgb(44 87 113)',
}