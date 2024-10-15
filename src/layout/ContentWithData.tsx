import React, { PropsWithChildren, ReactElement } from "react";
import { Error, Loader } from "../components"
import { Container } from "./Container";

interface ContentWithDataProps {
    loading?: boolean;
    error?: string | null;
}

export const ContentWithData:React.FC<PropsWithChildren<ContentWithDataProps>> = ({ loading, error, children }): ReactElement => {

    return <Container>
        {error ? <Error message={error || ""} /> 
        : loading ?  <Loader /> 
        : children}
    </Container>
} 