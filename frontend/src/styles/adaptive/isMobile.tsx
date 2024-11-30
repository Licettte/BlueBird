import {useMatchMedia} from "@alfalab/core-components/mq";
import {mobile} from "./breakpoints";
export  const useIsMobile = () => {
    const [matches] = useMatchMedia(mobile);    return `Matches ${mobile}: ${matches}`;
};
