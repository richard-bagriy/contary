export interface DashboardResponse {
    all_companies: number,
    all_revenue: number,
    profitable_companies: number,
    unprofitable_companies: number,
    a_stage_companies: number,
    b_stage_comapnies: number,
    c_stage_companies: number,
    line_metrics: Array<{ month: string, value: number }>
}

export type CompanyItem  = {
    name: string,
    id: string,
    start_date: string,
    end_date: string,
    stage: "A" | "B" | "C",
    profit: number,
    expected_profit: number,
    progress: number,
    month: number,
    industries: string[]
}

export interface CompaniesResponse {
    data: CompanyItem[];
}