import {IconButton} from "@alfalab/core-components/icon-button";
import ArrowBackMIcon from "@alfalab/icons/glyph/dist/ArrowBackMIcon";
import React from "react";
import {useNavigate} from "react-router";
import {Wrapper} from "./styles";

export const ArrowBack = () => {
    const navigate = useNavigate()

    return (
        <Wrapper  onClick={()=> navigate('/')}>
            <IconButton
                view='secondary'
                size={32}
                icon={ArrowBackMIcon}
            />
            Назад
        </Wrapper>
    );
};
