import React, { ReactElement, useEffect } from "react";
import { ContentWithData } from "../layout/ContentWithData";
import { useFetch } from "../hooks";
import { CompaniesResponse, CompanyItem } from "../types";
import { useComapniesContext } from "../context/companies.context";
import { Progress, Tag } from "antd";
import { Table } from "../components";
import { ColumnType } from "antd/es/table";
import { formatNumber } from "../utils";
import { Link } from "react-router-dom";

const columns: ColumnType<CompanyItem>[] = [
    {
        title: "Name",
        dataIndex: "name",
        render: (name, record) => <Link to={record.id}>{name}</Link>
    },
    {
        title: "Start Date",
        dataIndex: "start_date",
    },
    {
        title: "End Date",
        dataIndex: "end_date",
    },
    {
        title: "Stage",
        dataIndex: "stage",
        render: (stage) => {
            const color = stage === 'A' ? 'green' :
            stage === 'B' ? 'orange' :
            stage === 'C' ? 'red' : "";

            return <Tag color={color} key={stage}> {stage}</Tag>
        }
    },
    {
        title: "Current Profit",
        dataIndex: "profit",
        render: (value) => formatNumber(value) + "$"
    },
    {
        title: "Expected Profit",
        dataIndex: "expected_profit",
        render: (value) => formatNumber(value) + "$"
    },
    {
        title: "Progress",
        dataIndex: "progress",
        render: (value) => <Progress percent={Number(value)} size="small" />
    },
    {
        title: "Industries",
        dataIndex: "industries",
        render: (industries: string[]) =>  {
            return <span>
                {industries.map((ind) => <Tag color="blue" key={ind}>{ind}</Tag>)}
            </span>
        }
    },
]

export const CompaniesPage: React.FC = (): ReactElement => {
    const { data, loading, error } = useFetch<CompaniesResponse>("companies");
    const { setCompanies, companies } = useComapniesContext();

    useEffect(() => {
        if (!loading) {
            setCompanies(data?.data || []);
        }
    }, [loading])

    return <ContentWithData error={error} >
        <Table<CompanyItem> title="Companies" columns={columns} loading={loading} dataSource={companies} rowKey="id" />
    </ContentWithData>
}