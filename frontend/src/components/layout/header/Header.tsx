import React from "react";
import {Flex} from "../../../styles/Flex";
import {ArrowBack} from "../../arrow-back/ArrowBack";
import {Logout} from "../../logout/Logout";
import {User} from "../../user/User";
import {useLocation} from "react-router";
import {PageRoutes} from "../../../routes/PageRoutes";
import {IconButton} from "@alfalab/core-components/icon-button";
import BriefcaseMIcon from "@alfalab/icons/glyph/dist/BriefcaseMIcon";
import AlfaScoresIosMIcon from "@alfalab/icons/glyph/dist/AlfaScoresIosMIcon";
import {colors} from "../../../styles/styleConstants";

export const Header = () => {
    const location = useLocation()

    return (
        <Flex justify="space-between">
            <Flex gap={15}>
                <Flex><AlfaScoresIosMIcon style={{color: colors.primary}}/> льфа бизнес</Flex>
                <Flex>   {location.pathname !== PageRoutes.MAIN && <ArrowBack/>}</Flex>
            </Flex>
            <Flex gap={15}>

                <IconButton
                    view='secondary'
                    size={32}
                    icon={BriefcaseMIcon}
                    style={{color: colors.thirtyLight}}
                />
                <User/>
                <Logout/>
            </Flex>
        </Flex>
    );
};
