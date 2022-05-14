import { languageItems } from './personalData';
import React, { CSSProperties, FC } from "react";
import { Row, Typography, Avatar, List } from 'antd';
import { TranslationOutlined } from '@ant-design/icons';

const { Title } = Typography;

export const Languages: FC = () => {
    return <div style={ContainerStyle}>
        <Row align="middle" itemType="flex">
            <TranslationOutlined style={HeartStyle}/>
            <Title level={4}>Languages</Title>
        </Row>
        <List
            itemLayout="horizontal"
            dataSource={languageItems}
            renderItem={item => (
                <List.Item.Meta
                    key={item.id}
                    title={item.name}
                    description={item.proficiency}
                    avatar={<Avatar src={item.icon} />}
                />
            )}
        />
    </div>
}

const ContainerStyle: CSSProperties = {
    padding: '14px',
    borderRadius: '7px',
    border: '2px solid #e8e8e8',
    borderLeft: '6px solid #FE5F7A',
}

const HeartStyle: CSSProperties = {
    fontSize: '22px',
    margin: '3px 10px auto 0px',
}