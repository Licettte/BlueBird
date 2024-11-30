import {Textarea} from "@alfalab/core-components/textarea";
import {CustomButton} from "../button/CustomButton";
import {ButtonText} from "../company/data";
import {Flex} from "../../styles/Flex";
import {useState} from "react";

const MAX_LENGTH = 50
export const Claim = () => {
    const [value, setValue] = useState('')
    const [isDisabled, setIsDisabled] = useState(false)
    const [isSended, setIsSended] = useState(false)

    const sendClaim= async ()=>{
        setIsSended(true)
        setValue('')
    }

    const isDisabledButton = !value.trim().length && value.length < MAX_LENGTH
    const onChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setValue(e.target.value)
    }

    const showNotification = isSended ? 'Сообщение успешно доставлено' : 'Что-то пошло не так'

    const showFormForClaim = <>
        Жаловаться сюда
        <div style={{width: '60%', marginTop: '20px'}}>
            <Textarea block maxRows={8} maxLength={MAX_LENGTH} onChange={onChange} value={value}/>
        </div>
        <Flex style={{width: '20%', marginTop: '30px'}} gap={30}>
            <CustomButton text={ButtonText.SEND} disable={isDisabledButton || isDisabled} onClick={sendClaim}/>
        </Flex>
    </>


    return (
        <Flex align={"center"} justify={"center"} dir={"column"}>
            {isSended ? showNotification : showFormForClaim}

            {isSended && 'Предложить более подходящий вариант подписи'}
        </Flex>
    );
};

