import React, {FC} from "react";
import {Signature} from "./types";
import {Flex} from "../../styles/Flex";
import {colors} from "../../styles/styleConstants";
import {Button} from "@alfalab/core-components-button";
import ShieldAlfaCheckmarkMIcon from "@alfalab/icons/site/dist/ShieldAlfaCheckmarkMIcon";

export const SignatureItem: FC<Signature> = ({name, description}) => {

    return (
        <Flex gap={10} dir="column" style={{width: '100%', marginTop: '30px'}}>
            <Flex style={{fontWeight: 'bolder'}} > {name}</Flex>

            <div style={{margin: '20px',fontSize: '18px', lineHeight: '1.5', color: '#333', width: '70%', textAlign: 'justify',}}>
                Мы заметили, что вы часто используете простую электронную подпись. Для вашей безопасности и дополнительной
                защиты ваших данных рекомендуем подключить квалифицированную электронную подпись.<br/><br/>
                Она обеспечивает высокий уровень надежности и полностью соответствует современным требованиям
                безопасности. С квалифицированной подписью ваши документы и операции будут под надежной
                защитой.<br/><br/>
                Если у вас возникнут вопросы или потребуется помощь в подключении, мы будем рады Вам помочь.<br/><br/>
                С заботой о вас и ваших данных,<br/>
                Альфа-Банк.
            </div>

            <Flex justify={"space-between"} dir={"row"} style={{
                width: '70%',
                background: "rgb(233 233 234)",
                height: '80px',
                borderRadius: '25px',
                padding: '20px'
            }}>
                <Flex gap={10} style={{
                    fontSize: '20px',
                    padding: '10px',
                    color: colors.darkNeutral,
                    alignItems: "center",
                    justifyItems: "center",
                    textAlign: 'center'
                }}>

                    <Flex> <ShieldAlfaCheckmarkMIcon/> </Flex>
                    Мы гарантируем безопасность ваших данных
                </Flex>

                <Flex justify={"center"} style={{width: '30%'}}>

                    <Button colors='inverted' block={true} size={'s'} nowrap={true}
                            textResizing={'hug'} style={{background: colors.dark}}
                    >Подключить КЭП </Button>

                </Flex>
            </Flex>
        </Flex>
    );
};
