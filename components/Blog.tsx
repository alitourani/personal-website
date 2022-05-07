import { Row, Col } from 'antd';
import { Recent } from './Blog/Recent';
import { SidebarComponent } from './Sidebar';
import React, { CSSProperties, FC } from "react";

export const BlogComponent: FC = () => {
    return <Row gutter={[16, 16]}>
      <Col span={18} style={ContainerStyle}>
        <Recent />
      </Col>
      <Col span={6}>
        <SidebarComponent />
      </Col>
    </Row>
}

const ContainerStyle: CSSProperties = {}