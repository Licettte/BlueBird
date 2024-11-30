import {Button} from "@alfalab/core-components-button";
import {colors} from "../../styles/styleConstants";
import {FC} from "react";

interface CustomButtonProps {
    text: string;
    disable?: boolean;
    onClick?: () => void;
}

export const CustomButton: FC<CustomButtonProps> = ({text, disable, onClick}) => {

    return <Button disabled={disable} colors='inverted' block={true} size={'xxs'} nowrap={true}
                   textResizing={'hug'} style={{background: colors.thirtyLight}}
                   onClick={onClick}
    > {text} </Button>
}
