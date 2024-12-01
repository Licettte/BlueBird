import {colors} from "../../../styles/styleConstants";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {PageRoutes} from "../../../routes/PageRoutes";

export const Footer = () => {
    const location = useLocation()
    return (
        <Link to='claim' style={{
            color: location.pathname === PageRoutes.SIGNATURES ? colors.dark : colors.thirtyLight,
            cursor: 'pointer'
        }}>
            Сообщить об ошибке
        </Link>
    );
};
