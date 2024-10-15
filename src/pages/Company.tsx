import React, { ReactElement } from "react";
import { ContentWithData } from "../layout/ContentWithData";
import { useNavigate, useParams } from "react-router-dom";
import { useComapniesContext } from "../context/companies.context";
import { Descriptions, Flex, message, Progress, Row, Tag, Tooltip } from "antd";
import { formatNumber } from "../utils";
import { Button } from "../components";


export const CompanyPage: React.FC = (): ReactElement => {
    /// this should be take from state or fetch item by id , But for now i just do as quicker
    const { id } = useParams()
    const navigate = useNavigate();
    const { companies, setCompanies } = useComapniesContext()
    const company = companies.find(company => company?.id === id)


    const handleOnDelete = (): void => {
        setCompanies(prevState => prevState.filter(company => company?.id !== id))
        navigate("/companies")
        message.success(`Company "${company?.name}" was successfully deleted.`)
    }


    return <ContentWithData error={company ? null : "Company wasn't find. PLeast try again later."}>
        <Descriptions title="Company info" bordered layout="horizontal" items={[
            { key: "1", label: "Name", span: 6, children: company?.name },
            { key: "2", label: "Start date", span: 12, children: company?.start_date },
            { key: "3", label: "End date", span: 12, children: company?.end_date },
            { key: "4", label: "Stage", span: 12, children: <Tag color="blue">{company?.stage}</Tag> },
            { key: "5", label: "Profit", span: 12, children: formatNumber(company?.profit || 0) },
            { key: "6", label: "Expected profit", span: 12, children: formatNumber(company?.expected_profit || 0) },
            { key: "7", label: "Progress", span: 12, children: <Progress size="small" percent={company?.progress || 0} />},
            { key: "8", label: "Industries", span: 12, children: company?.industries?.map(ind => <Tag color="purple">{ind}</Tag>)},
        ]}></Descriptions>


        <Flex justify="end" style={{marginTop: 16}} gap={10}>
            <Tooltip title="Edit logic in progress...">
                <Button type="primary" disabled>Edit</Button>
            </Tooltip>
            <Button danger type="primary" onClick={handleOnDelete}>Delete</Button>
        </Flex>

    </ContentWithData>
}