import styled from "styled-components";
import {mobile, tablet, desktop} from "../styles/adaptive/breakpoints";
import {Flex} from "../styles/Flex";
export const Top = styled.header`
    min-height: 50px;
    width: 100%;
    margin: 15px

`;
export const Content = styled.div`
    margin: 40px 0 0 0;
    flex: 1 1 auto;
    width: 100%;
`;

export const Bottom = styled.footer`
    min-height: 50px;      
`;

export const Container = styled(Flex)`
    min-height: 100vh;
    @media (max-width: ${mobile}) {
        max-width: 480px;
        margin: auto;      
    }

    @media (min-width: ${tablet}) {
        max-width: 726px;
        margin: auto;            
    }

    @media (min-width: ${desktop}) {
        max-width: 1120px;
        margin: auto;
    }
`;
