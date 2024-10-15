import React, { ReactElement } from "react";
import { Card, Tooltip, Typography, Statistic, Flex } from "antd";
import { QuestionCircleOutlined } from "@ant-design/icons";

interface MetricsCardProps {
    title: string;
    value?: string | number;
    tooltip?: string;
    isFinancial?: boolean;
}

export const MetricsCard: React.FC<MetricsCardProps> = ({ title, value, tooltip, isFinancial }): ReactElement => {
    return <Card>
        <Flex justify="space-between" align="start">
            <Typography.Title level={5} style={{ marginTop: 0 }}>{title}</Typography.Title>
        { tooltip && <Tooltip title={tooltip}><QuestionCircleOutlined /></Tooltip> }
        </Flex>
        <Statistic value={value} precision={isFinancial ? 2 : undefined} prefix={isFinancial ? "$" : null }  />
    </Card>
}

