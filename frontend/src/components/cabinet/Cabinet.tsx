import {Flex} from "../../styles/Flex";
import {CustomButton} from "../button/CustomButton";
import {ButtonText} from "../company/data";
import {Button} from "@alfalab/core-components-button";
import {colors} from "../../styles/styleConstants";
import React from "react";

export const Cabinet = () => {

    const setSignature = () => {

    }
    const changeSignature = () => {

    }

    return (
        <Flex gap={20} dir={"column"} style={{width: '100%'}}>

            <Flex gap={20} dir={"column"} align={"flex-start"} style={{width: '100%'}}>
                <Flex dir={"column"} align={"flex-start"}>
                    <Flex><h5>Способы подписания.</h5></Flex>
                    <Flex> Вам доступно : НЭП</Flex>
                    <Flex> Подключены: SMS</Flex>
                </Flex>

                <Flex gap={20} style={{width: '20%'}}>
                    <CustomButton text={ButtonText.SET} disable={false} onClick={setSignature}/>
                    <CustomButton text={ButtonText.CHANGE} disable={false} onClick={changeSignature}/>
                </Flex>
            </Flex>

            <Flex gap={20} style={{marginTop: '20px'}} dir={"column"}>

                <h3>Подписывайте документы быстрее</h3>
                <Flex style={{width: '50%'}}> Мы заметили, что вы часто работаете с налоговыми отчётами, и нашли для вас
                    простой и удобный способ их
                    подписания.
                </Flex>


                <Flex style={{width: '25%', }}>
                    <Button colors='inverted' block={true} size={'s'} nowrap={true}
                            textResizing={'hug'} style={{background: colors.dark, fontWeight: "bolder", fontSize: '20px'}}
                    >Подключить КЭП </Button>

                </Flex>





            </Flex>

        </Flex>
    );
};

