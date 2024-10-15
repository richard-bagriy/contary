import React, { ReactElement, useEffect, useState } from "react";
import { Layout, MenuProps, Menu, Divider } from "antd";
import { HomeOutlined, DatabaseOutlined } from "@ant-design/icons";
import logo from "../assets/svg/logo.svg";
import { Link, useLocation, useSearchParams } from "react-router-dom";

type MenuItem = Required<MenuProps>['items'][number];

const items: MenuItem[] = [
    { label: <Link to="/">Dashbaord</Link>, key: "dashboard", icon: <HomeOutlined /> },
    { label: <Link to="/companies">Companies</Link>, key: "companies", icon: <DatabaseOutlined /> }
];

export const Sidebar: React.FC = (): ReactElement => {
    const location = useLocation();
    const [selectedKey, setSelectedKey] = useState("dashboard");

    useEffect(() => {
        // This would be changed 
        setSelectedKey(location?.pathname === "/" ? "dashboard" : "companies")
    }, [])


    return <Layout.Sider theme="light">
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", height: 80 }}>
            <img src={logo} alt="Contary" />
        </div>
        <Divider style={{ margin: 0 }} />
        <Menu theme="light" selectedKeys={[selectedKey]} mode="inline" items={items}  />
    </Layout.Sider>
}