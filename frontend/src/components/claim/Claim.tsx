import {Textarea} from "@alfalab/core-components/textarea";
import {CustomButton} from "../button/CustomButton";
import {ButtonText} from "../company/data";
import {Flex} from "../../styles/Flex";
import {useState} from "react";

const MAX_LENGTH = 50
export const Claim = () => {
    const [value, setValue] = useState('')
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const isDisabledButton = !value.trim().length && value.length < MAX_LENGTH

    return (
        <Flex align={"center"} justify={"center"} dir={"column"}>
            Жаловаться сюда
            <div style={{width: '60%',marginTop: '20px'}}>
                <Textarea block maxRows={8} maxLength={MAX_LENGTH} onChange={onChange} value={value}/>
            </div>
            <Flex style={{width: '60%', marginTop: '30px'}} gap={30}>
                <CustomButton text={ButtonText.SIMPLE_CLAIM} disable={isDisabledButton}/>
                <CustomButton text={ButtonText.HARD_CLAIM} disable={isDisabledButton}/>
            </Flex>
        </Flex>
    );
};

