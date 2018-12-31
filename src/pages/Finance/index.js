import React from 'react';
import { Tabs, Col, Row } from "antd";
import FinanceBalance from "../../components/FinanceBalance";
import FinanceDistribution from "../../components/FinanceDistribution";

import FinanceBalanceData from '../../../data/FinanceBalance'
import FinanceDistributionData from "../../../data/FinanceDistribution";

const TabPane = Tabs.TabPane;

export default function () {
    return <Tabs
        tabPosition="left"
        defaultActiveKey="1"
        style={{ minHeight: 500 }}
    >
        <TabPane tab="浙江分区收支" key="1">
            <FinanceBalance title="2018年1-11月浙江省各市财政收支" data={FinanceBalanceData.Zhejiang} />
        </TabPane>
        <TabPane tab="宁波分区收支" key="2">
            <FinanceBalance title="2018年1-10月宁波市各县区财政收支" data={FinanceBalanceData.Ningbo} />
        </TabPane>
        <TabPane tab="浙江收支详情" key="3">
            <Row>
                <Col span={12}>
                    <FinanceDistribution
                        title="2018年1-11月浙江一般财政收入预算分布表"
                        data={FinanceDistributionData.ZhejiangIncome}
                    />
                </Col>
                <Col span={12}>
                    <FinanceDistribution
                        title="2018年1-11月浙江一般财政支出预算分布表"
                        data={FinanceDistributionData.ZhejiangOutcome}
                    />
                </Col>
            </Row>
        </TabPane>
        <TabPane tab="宁波收支详情" key="4">
            <Row>
                <Col span={12}>
                    <FinanceDistribution
                        title="2018年1-10月宁波一般财政收入预算分布表"
                        data={FinanceDistributionData.NingboIncome}
                    />
                </Col>
                <Col span={12}>
                    <FinanceDistribution
                        title="2018年1-10月宁波一般财政支出预算分布表"
                        data={FinanceDistributionData.NingboOutcome}
                    />
                </Col>
            </Row>
        </TabPane>

    </Tabs >
}