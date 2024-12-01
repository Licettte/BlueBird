import {colors} from "../../../styles/styleConstants";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
import {PageRoutes} from "../../../routes/PageRoutes";
import {Flex} from "../../../styles/Flex";


export const Footer = () => {
    const location = useLocation()
    return (
        <Flex dir={"row"} gap={15} justify={"space-between"}>
            <Link to='claim' style={{
                color: location.pathname === PageRoutes.SIGNATURES ? colors.dark : colors.thirtyLight,
                cursor: 'pointer'
            }}>
                Сообщить об ошибке
            </Link>

            <a href="tel:+78002000 00">
                <span style={{color: colors.darkNeutral}}>Частным лицам</span> 8 800 200 00 00
            </a>

        </Flex>
    );
};
