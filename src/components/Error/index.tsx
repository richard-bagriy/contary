import { Result } from "antd";
import React, { ReactElement } from "react";

interface ErrorProps {
    message: string
    title?: string;
}

export const Error: React.FC<ErrorProps> = ({ message, title }): ReactElement => {
    return <Result status="500" title={title ?? "500"} subTitle={message} />
}
