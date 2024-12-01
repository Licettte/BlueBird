import React, {FC} from "react";
import {Signature} from "./types";
import {Flex} from "../../styles/Flex";
import {colors} from "../../styles/styleConstants";
import {CustomButton} from "../button/CustomButton";

export const SignatureItem: FC<Signature> = ({name, description}) => {

      return (
        <Flex gap={10} dir="column" style={{width: '100%', marginTop: '40px'}}>
            <Flex style={{fontWeight: 'bolder'}}> {name}</Flex>

            <Flex style={{
                padding: '25px',
                textAlign: 'justify',
                width: '75%',
                lineHeight: '25px',

            }}>
                {description}
            </Flex>

            <Flex  justify={"center"} style={{
                width: '20%'
            }}>
                <CustomButton text='Подключить КЭП' color={colors.dark}/>
            </Flex>
        </Flex>
    );
};
