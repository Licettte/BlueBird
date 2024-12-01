import React, {useEffect, useState} from "react";
import {useIsMobile} from "../../styles/adaptive/isMobile";
import {CodeInput} from "@alfalab/core-components/code-input";
import {Flex} from "../../styles/Flex";
import {useLocation} from "react-router";
import {Button} from "@alfalab/core-components-button";
import {colors} from "../../styles/styleConstants";
import {useAppSelector} from "../../store/useAppSelector";
import {useActions} from "../../store/actions";
import {Timer} from "../timer/Timer";
import {SignatureOffer} from "../offers/SignatureOffer";
import {SmsModal} from "../modals/SMSModal";

export const ConfirmPage = () => {
    const location = useLocation();
    const {documentId} = location.state || {};
    const userPhone = '+71234567890'
    const {setSeconds} = useActions();
    const {totalSeconds} = useAppSelector((state) => state.timerReducer);

    const [isOffer, setIsOffer] = useState(false)
    const [isOpen, setIsOpen] = React.useState(false);

    const handleOpen = () => {
        setIsOpen(true);

    };
    const handleClose = () => setIsOpen(false);

    useEffect(() => {
        setSeconds(3)
        setIsOffer(false)
    }, []);

    useEffect(() => {
        setTimeout(() => {
            totalSeconds === 0 && setIsOffer(true)
        }, 2000)
    }, [totalSeconds]);

    const formatPhoneNumber = (phone: string) => {
        return `+7 ··· ··· ${(String(phone)).slice(-4, -2)} ${phone.slice(-2)}`;
    }

    return (
        <Flex gap={40} justify={"center"} dir={"column"}>
            <h1>Введите код из сообщения</h1>
            <Flex>Kод отправлен на {formatPhoneNumber(userPhone)}</Flex>
            <Flex> <CodeInput fields={useIsMobile() ? 4 : 5} breakpoint={32}/></Flex>

            <Flex gap={10} dir={"column"}>
                <Timer/>
                {totalSeconds === 0 && <Button onClick={() => setSeconds(3)}>Запросить код повторно </Button>}

                <Flex style={{
                    color: colors.darkNeutral,
                    textDecoration: 'underline dashed',
                    textUnderlineOffset: '4px',
                }} onClick={handleOpen}> Не приходит код? </Flex>
            </Flex>

            {isOffer && <SignatureOffer/>}
            <Flex><SmsModal isOpen={isOpen} handleClose={handleClose}/></Flex>


        </Flex>
    );
};

