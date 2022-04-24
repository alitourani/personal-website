import { Row, Col } from 'antd';
import { Recent } from './Blog/Recent';
import React, { CSSProperties, FC } from "react";

export const BlogComponent: FC = () => {
    return <Row>
      <Col span={24} style={ContainerStyle}>
        <Recent />
      </Col>
    </Row>
}

const ContainerStyle: CSSProperties = {}