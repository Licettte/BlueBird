import {useMatchMedia} from "@alfalab/core-components/mq";
export  const useIsMobile = () => {
    const [matches] = useMatchMedia('--mobile');    return matches;
};
