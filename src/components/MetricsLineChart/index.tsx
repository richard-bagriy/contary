import React, { ReactElement } from "react";
import { Line } from "@ant-design/charts";
import { Card } from "antd";


interface MetricsLineCharProps {
  data: Array<{ [key: string]: any }>;
  xField: string;
  yField: string;
  title?: string;
}

export const MetricsLineChart: React.FC<MetricsLineCharProps> = ({ data, xField, yField, title }): ReactElement => {

    const config = {
        data,
        title,
        smooth: true,
        xField,
        yField,
        meta: {
          [xField]: { alias: xField.charAt(0).toUpperCase() + xField.slice(1) },
          [yField]: { alias: yField.charAt(0).toUpperCase() + yField.slice(1) },
        },
      };

    return <Card style={{ maxWidth: 650  }}>
        <Line {...config} />
    </Card>
}