import { Row, Typography, Space } from 'antd';
import React, { CSSProperties, FC } from "react";
import { HeartTwoTone } from '@ant-design/icons';

const { Title, Link } = Typography;

export const FieldsOfInterest: FC = () => {
    return <div style={ContainerStyle}>
        <Row align="middle" itemType="flex">
            <HeartTwoTone twoToneColor="#F40F35" style={HeartStyle}/>
            <Title level={4}>Fields of Interest</Title>
        </Row>
        <Row>
            <Space direction="horizontal">
                <Link href="https://dblp.org/search?q=computer+vision" target="_blank">#ComputerVision</Link>
                <Link href="https://dblp.org/search?q=machine+learning" target="_blank">#MachineLearning</Link>
                <Link href="https://dblp.org/search?q=deep+learning" target="_blank">#DeepLearning</Link>
                <Link href="https://dblp.org/search?q=information+retrieval" target="_blank">#InformationRetrieval</Link>
                <Link href="https://dblp.org/search?q=visual+slam" target="_blank">#VisualSLAM</Link>
            </Space>
        </Row>
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