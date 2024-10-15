import { Layout } from "antd";
import React, { PropsWithChildren, ReactElement } from "react";
import { Sidebar } from "./Sidebar";

export const Container: React.FC<PropsWithChildren> = ({ children }):ReactElement => {

    return <Layout style={{ minHeight: "100vh" }}>
        <Sidebar />
        <Layout>
            <Layout.Content style={{ padding: 15 }}>
                {children}
            </Layout.Content>
        </Layout>
    </Layout>
}