import React from "react";
import {useIsMobile} from "../../styles/adaptive/isMobile";
import {CodeInput} from "@alfalab/core-components/code-input";
import {Flex} from "../../styles/Flex";
import {useLocation} from "react-router";

export const ConfirmPage = () => {
    const location = useLocation();
    const {documentId} = location.state || {};

    const userPhone = '+71234567890'
    const formatPhoneNumber = (phone: string) => {
        return `+7 ··· ··· ${(String(phone)).slice(-4, -2)} ${phone.slice(-2)}`;
    }


    // return (
    //     <Flex justify={"center"}>
    //
    //         <h1>Введите код из сообщения</h1>
    //         код отправлен на {formatPhoneNumber}
    //         <CodeInput fields={
    //             useIsMobile() ? 4 : 5} breakpoint={32}/>
    //     </Flex>
    // );
    //

    return (
        <Flex justify={"center"} dir={"column"}>

            {formatPhoneNumber(userPhone)}
            <CodeInput fields={useIsMobile() ? 4 : 5} breakpoint={32}/>

        </Flex>
    );
};

