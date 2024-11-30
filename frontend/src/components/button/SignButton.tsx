import {Button} from "@alfalab/core-components-button";
import {colors} from "../../styles/styleConstants";

export const SignButton = () => {

    return <Button  colors='inverted' block={true} size={'xxs'} nowrap={true}  textResizing={'hug'} style={{background: colors.thirtyLight}}> На подпись </Button>
}
