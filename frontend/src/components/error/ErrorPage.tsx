import error from './error.gif';
import styled from "styled-components";
import {Flex} from "../../styles/Flex";

const Img = styled.img`
    width: 300px;
    height: 345px;
    border-radius: 100%;
`;

export const ErrorPage = () => {

    return (
        <Flex dir={"column"} gap={40} >
            Что-то пошло не так, и мы, кажется, пришли не туда..
            <Img src={error} alt='error '/>

        </Flex>
    );
};

