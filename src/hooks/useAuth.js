import { useDispatch, useSelector } from "react-redux"
import { setUser } from "../services/reducers/auth";

export const useAuth = () => {
    const { user } = useSelector(state => state.auth);
    const dispatch = useDispatch();
    const setUserAction = (user) => dispatch(setUser(user));

    return {
        user,
        actions: {
            setUser: setUserAction,
        }
    }
}