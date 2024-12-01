import {FC} from "react";
import {CustomButton} from "../button/CustomButton";
import {ButtonText} from "./data";
import {Link} from "react-router-dom";
import {PageRoutes} from "../../routes/PageRoutes";

interface NavigateButtonProps {
    state?: number
    path: PageRoutes
    text: ButtonText
}

export const NavigateButton: FC<NavigateButtonProps> = ({state, path, text}) => {
    return (
        <Link to={path} state={{documentId: state}} style={{width:'100%'}}>
            <CustomButton text={text}/>
        </Link>
    );
};

