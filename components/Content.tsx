import React, { CSSProperties, FC } from "react";
import { Row, Col } from 'antd';

export const ContentComponent: FC = () => {

    return <Row >
      <Col span={24} style={ContainerStyle}>
        Sample
      </Col>
      </Row>
}

const ContainerStyle: CSSProperties = {}