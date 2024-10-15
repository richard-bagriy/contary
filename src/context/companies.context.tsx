import React, { createContext, PropsWithChildren, useContext, useEffect, useState } from 'react';
import { CompanyItem } from '../types';

interface ComapniesContextType {
    companies: CompanyItem[],
    setCompanies: React.Dispatch<React.SetStateAction<CompanyItem[]>>;
}

// I'm using this context as example, I didn't want any other state managment, 
const CompaniesContext = createContext<ComapniesContextType | null>(null);

// It's should also possible to take persist
export const CompaniesProvider: React.FC<PropsWithChildren> = ({ children }) => {
    const [companies, setCompanies] = useState<CompanyItem[]>(() => {
        const savedState = localStorage.getItem('state');
        return savedState ? JSON.parse(savedState) : []
    });

    useEffect(() => {
        localStorage.setItem('state', JSON.stringify(companies));
      }, [companies]);

    return <CompaniesContext.Provider value={{ setCompanies, companies }}>
        {children}
    </CompaniesContext.Provider>
}


export const useComapniesContext = (): ComapniesContextType => {
    const context = useContext(CompaniesContext);

    if (!context) {
        throw new Error("useComapniesContext must be used within a DataProvider");
    }

    return context;
};