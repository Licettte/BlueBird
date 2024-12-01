import {NavigateButton} from "../company/NavigateButton";
import {PageRoutes} from "../../routes/PageRoutes";
import {colors} from "../../styles/styleConstants";
import {Flex} from "../../styles/Flex";
import {ButtonText} from "../company/data";

export const SignatureOffer = () => {
    return (
        <Flex gap={20} dir={"column"}>
            <h5 style={{color: colors.thirtyLight}}> Долго не приходит sms ?</h5>
            <Flex gap={10} dir={"column"} style={{color: colors.bgPrimary}}>
                <Flex> Забудьте о том, чтобы считать секунды - считайте деньги.</Flex>
                <Flex> Попробуйте наш новый способ подписания.</Flex>
            </Flex>
            <NavigateButton path={PageRoutes.SIGNATURES} text={ButtonText.DETAILS}/>,
        </Flex>
    );
};
