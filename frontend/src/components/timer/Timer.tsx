import {useEffect} from 'react';
import {useActions} from '../../store/actions';
import {useAppSelector} from '../../store/useAppSelector';

export const Timer = () => {
    const {setSeconds} = useActions();
    const {totalSeconds} = useAppSelector((state) => state.timerReducer);

    const secondsStr = totalSeconds && String(Math.floor(totalSeconds % 60)).padStart(2, '0');

    useEffect(() => {
        if (!totalSeconds) return;

        const intervalId = setInterval(() => {
            setSeconds(totalSeconds - 1);
        }, 1000);

        return () => clearInterval(intervalId);

    }, [setSeconds]);

    return (<> {totalSeconds!==0 && secondsStr}</>
    );
};
