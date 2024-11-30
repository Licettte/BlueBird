import React, {FC} from "react";
import {Signature} from "./types";
import {Flex} from "../../styles/Flex";
import { toggleShadow} from "../../styles/styleConstants";

export const SignatureItem: FC<Signature> = ({name, description}) => {
    return (
        <Flex gap={30} dir="column" style={{
            width: '180px', height: '180px', padding: '15px',
            borderRadius: '25px',
            boxShadow: toggleShadow
        }}>
            <Flex> {name}</Flex>
            <Flex>     {description}</Flex>

        </Flex>
    );
};
