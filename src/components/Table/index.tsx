import React from "react";
import { Card, Divider, Table as TableContent, TableProps as TableInnerProps, Typography } from "antd";

interface TableProps<T> extends Omit<TableInnerProps<T>, "title"> {
    title?: string;
}

export const Table = <T,>({ title, ...otherProps }: TableProps<T>) => {
    return (
        <Card>
            {title && <>
                <Typography.Title level={3} style={{ textAlign: "center", fontWeight: "bold", marginTop: 0 }}>{title}</Typography.Title>
                <Divider />
            </>}
            
            <TableContent {...otherProps} />
        </Card>
    );
};