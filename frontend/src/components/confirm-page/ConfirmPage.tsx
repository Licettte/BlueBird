import React from "react";
import {useIsMobile} from "../../styles/adaptive/isMobile";
import {CodeInput} from "@alfalab/core-components/code-input";
import {Flex} from "../../styles/Flex";
import {useLocation} from "react-router";

export const ConfirmPage = () => {
    const location = useLocation();
    const { documentId}= location.state || {}; //

    return (
        <Flex justify={"center"}>
            <CodeInput fields={
                useIsMobile() ? 4 : 5} breakpoint={32}/>
        </Flex>
    );
};

