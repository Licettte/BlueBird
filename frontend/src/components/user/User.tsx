import {UserAvatar} from "./userAvatar/userAvatar";
import {Flex} from "../../styles/Flex";
import {useNavigate} from "react-router";

export const User = () => {
    // const navigate = useNavigate()
    // const user = getUserById
    // navigate('profile')
    return (
        <Flex align='center' style={{cursor: "pointer"}}>
            <UserAvatar/>
            Зинаида Васильевна
        </Flex>
    );
};

