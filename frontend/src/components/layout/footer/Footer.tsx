import {colors} from "../../../styles/styleConstants";
import {Link} from "react-router-dom";

export const Footer = () => {
    return (
        <Link to='claim' style={{color: colors.thirtyLight, cursor: 'pointer'}}>
            Подача обращения, связанного с электронной подписью
        </Link>
    );
};
