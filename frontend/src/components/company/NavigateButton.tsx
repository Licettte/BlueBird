import {FC} from "react";
import {CustomButton} from "../button/CustomButton";
import {ButtonText} from "./data";
import {Link} from "react-router-dom";
import {PageRoutes} from "../../routes/PageRoutes";

interface NavigateButtonProps {
    documentId: number
}

export const NavigateButton: FC<NavigateButtonProps> = ({documentId}) => {
    return (

        <Link to={PageRoutes.CONFIRM} state={{documentId: documentId}}>
            <CustomButton text={ButtonText.SIGNATURE}/>
        </Link>
    );
};

