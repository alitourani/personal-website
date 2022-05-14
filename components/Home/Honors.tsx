import { honorItems } from './personalData';
import { Row, Typography, List } from 'antd';
import { CrownFilled } from '@ant-design/icons';
import React, { CSSProperties, FC } from "react";

const { Title } = Typography;

export const Honors: FC = () => {
    return <div style={ContainerStyle}>
        <Row align="middle" itemType="flex">
            <CrownFilled style={HeartStyle}/>
            <Title level={4}>Honors and Awards</Title>
        </Row>
        <List
            size="large"
            itemLayout="vertical"
            dataSource={honorItems}
            renderItem={item => (
                <List.Item key={item.title}>
                    <List.Item.Meta
                        title={item.title}
                    />
                    {item.description}
                </List.Item>
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