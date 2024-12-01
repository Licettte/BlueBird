import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {timerActions} from "./reducers/timerSlice";

const actions = {
    ...timerActions,

};
export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
