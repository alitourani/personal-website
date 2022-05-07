import { Row, Col } from 'antd';
import { SidebarComponent } from './Sidebar';
import React, { CSSProperties, FC } from "react";
import { FieldsOfInterest } from './Home/FieldsOfInterest';

export const HomeComponent: FC = () => {
    return <Row gutter={[16, 16]}>
      <Col span={18} style={ContainerStyle}>
        <FieldsOfInterest />
      </Col>
      <Col span={6}>
        <SidebarComponent />
      </Col>
    </Row>
}

const ContainerStyle: CSSProperties = {}