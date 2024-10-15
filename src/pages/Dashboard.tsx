import React, { ReactElement } from "react";
import { Col, Row } from "antd";
import { useFetch } from "../hooks"
import { ContentWithData } from "../layout/ContentWithData";
import { MetricsCard, Error, Loader, MetricsLineChart } from "../components";
import { DashboardResponse } from "../types";

export const DashboardPage: React.FC = (): ReactElement => {
    const { data, loading, error } = useFetch<DashboardResponse>("dashboard");

    return <ContentWithData error={error} loading={loading}>
        <Row gutter={[16, 16]}>
            {/* I Could use these some maper and create map and I'll have [].map( => <Col> <Metrics Card /> </Col) */}
            <Col sm={12}>
                <Row gutter={[16, 16]}>
                    <MetricsLineChart title="Profit" xField="month" yField="value" data={data?.line_metrics || []} />
                </Row>
            </Col>
            <Col sm={12}>
                <Row gutter={[16, 16]}>
                    <Col sm={12}>
                        <MetricsCard value={data?.all_companies} title="All Companies" tooltip="Overall companies quantity" />
                    </Col>
                    <Col sm={12}>
                        <MetricsCard value={data?.all_revenue} title="All revenue" tooltip="All revenue" />
                    </Col>
                    <Col sm={12}>
                        <MetricsCard value={data?.profitable_companies} title="Profitable Companies" tooltip="Quanitity of profitable companies" />
                    </Col>
                    <Col sm={12}>
                        <MetricsCard value={data?.unprofitable_companies} title="Unprofitable Companies" tooltip="Quanitity of unprofitable companies" />
                    </Col>
                    <Col sm={12}>
                        <MetricsCard value={data?.a_stage_companies} title="A Stage Companies" tooltip="A Stage Companies" />
                    </Col>
                    <Col sm={12}>
                        <MetricsCard value={data?.b_stage_comapnies} title="B Stage Companies" tooltip="B Stage Companies" />
                    </Col>
                    <Col sm={12}>
                        <MetricsCard value={data?.c_stage_companies} title="C Stage Companies" tooltip="C Stage Companies" />
                    </Col>
                </Row>
            </Col>
        </Row>    
    </ContentWithData>
}