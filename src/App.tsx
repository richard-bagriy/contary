import React, { ReactElement } from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import { DashboardPage } from "./pages/Dashboard";
import { CompaniesPage } from "./pages/Companies";
import { CompaniesProvider } from "./context/companies.context"
import { CompanyPage } from "./pages/Company";
import { Container } from "./layout/Container";
import { Error } from "./components";

export const App: React.FC = () :ReactElement => {
    return (<CompaniesProvider>
        <BrowserRouter>
        {/* I would move some routes into some folder and create object or array with all routes and apply these insted of what i did */}
            <Routes>
                <Route path="/" element={<DashboardPage />} />
                <Route path="/companies" element={<CompaniesPage />} />
                <Route path="/companies/:id" element={<CompanyPage />} />
                <Route path="*" element={<Container><Error message="404" title="404" /></Container>} />
            </Routes>
        </BrowserRouter>
    </CompaniesProvider>
    )
}