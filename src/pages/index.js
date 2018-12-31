import React from 'react';
import { Tabs, Col, Row } from "antd";
import GDPChart from "../components/GDPChart";
import DistritPieChart from "../components/DistritPieChart";

import GDP from '../../data/GDP'
import DistrictGDP from '../../data/DistrictGDP'

const TabPane = Tabs.TabPane;

export default function () {
  return <Tabs
    tabPosition="left"
    defaultActiveKey="1"
    style={{ minHeight: 500 }}
  >
    <TabPane tab="浙江" key="1">
      <Row>
        <Col span={12}>
          <GDPChart city="浙江" data={GDP.Zhejiang} />

        </Col>
        <Col span={12}>
          <DistritPieChart
            title="浙江2017年各城市GDP分布图"
            data={DistrictGDP.Zhejiang}
          />
        </Col>
      </Row>
    </TabPane>
    <TabPane tab="宁波" key="2">
      <Row>
        <Col span={12}>
          <GDPChart
            city="宁波"
            data={GDP.Ningbo}
          />
        </Col>
        <Col span={12}>
          <DistritPieChart
            title="宁波2017年各县市GDP分布图"
            data={DistrictGDP.Ningbo}
          />
        </Col>
      </Row>
    </TabPane>

  </Tabs >
}