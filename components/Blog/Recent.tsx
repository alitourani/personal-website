import { List, Avatar } from 'antd';
import { recentItems } from './news';
import React, { CSSProperties, FC } from "react";

export const Recent: FC = () => {
    return <List
        itemLayout="horizontal"
        dataSource={recentItems}
        renderItem={item => (
        <List.Item>
            <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href={item.link}>{item.title}</a>}
                description={item.content}
            />
        </List.Item>
        )}
    />
}

const ContainerStyle: CSSProperties = {}