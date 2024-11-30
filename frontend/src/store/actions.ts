import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {postsActions} from "./reducers/postsSlice";

const actions = {
    ...postsActions,

};
export const useActions = () => {
    return bindActionCreators(actions, useDispatch());
};
