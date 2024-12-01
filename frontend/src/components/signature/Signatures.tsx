import {colors} from "../../styles/styleConstants";
import React, {useState} from "react";
import {Spinner} from "@alfalab/core-components/spinner";
import {SignatureItem} from "./SignatureItem";
import {Flex} from "../../styles/Flex";

export const Signatures = () => {
    const [isLoading, setIsLoading] = useState(false);

    const signature = {
        id: 6, name: 'Квалифицированная электронная подпись', description: 'Мы заметили, что вы используете простую электронную подпись. Для вашей безопасности и дополнительной защиты ваших данных рекомендуем подключить квалифицированную электронную подпись.\n' +
            '\n' +
            'Она обеспечивает высокий уровень надежности и полностью соответствует современным требованиям безопасности. С квалифицированной подписью ваши документы и операции будут под надежной защитой.\n' +
            '\n' +
            'Если у вас возникнут вопросы или потребуется помощь в подключении, мы будем рады Вам помочь.\n' +
            '\n' +
            'С заботой о вас и ваших данных,\n' +
            'Альфа-Банк'
    }

    const showSpinner = <Spinner visible={isLoading} preset={16}/>
    const showSignature = <SignatureItem key={signature.id} {...signature}  />

    return (
        <Flex justify="center" dir="column" style={{width: '100%'}}>

            <Flex align="flex-start" dir="column"> <span style={{color: colors.darkNeutral}}>Вы выбрали нас</span>
                <h1>Мы выбрали <span style={{color: colors.dark}}>лучшее </span> для вас</h1>
            </Flex>

            <Flex style={{marginTop: '20px', width: '100%'}}>  {!signature ? showSpinner : showSignature} </Flex>

        </Flex>
    );
}
