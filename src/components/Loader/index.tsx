import React, { ReactElement } from "react";
import { Flex, Spin } from "antd";

export const Loader: React.FC = (): ReactElement => {
    return <Flex justify="center" align="center">
        <Spin tip="Loading" size="large" />
    </Flex>
}
