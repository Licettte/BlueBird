import {FC} from "react";
import {CustomButton} from "../button/CustomButton";
import {ButtonText} from "./data";
import {Link} from "react-router-dom";
import {PageRoutes} from "../../routes/PageRoutes";
import {useSignDocumentMutation} from "../../store/reducers/signatureApi";

interface NavigateButtonProps {
    state?: number
    path: PageRoutes
    text: ButtonText
}

export const NavigateButton: FC<NavigateButtonProps> = ({state, path, text}) => {

    const [signDocument] = useSignDocumentMutation()

    const onSignDocument =  () => {
      signDocument(Number(1))
    }

return (
    <Link to={path} state={{documentId: state}} style={{width: '100%'}}>
        <CustomButton text={text} onClick={()=>onSignDocument()}/>
    </Link>
);
}
;

