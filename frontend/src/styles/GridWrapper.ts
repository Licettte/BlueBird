import styled from "styled-components";
import {desktop, tablet} from "./adaptive/breakpoints";


export const GridWrapper = styled.section`
    margin-top: 60px;
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    justify-items: center;
    //margin: 0 0 32px 0;

    @media (min-width: ${tablet}) {
        grid-template-columns: repeat(2, 1fr);
        justify-items: center;
    }

    @media (min-width: ${desktop}) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 1rem;
        grid-row-gap: 1rem;
        margin-bottom: 1rem;
    }
`;
