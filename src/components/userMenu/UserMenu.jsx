import { useDispatch} from 'react-redux';
import { logOut } from 'redux/auth/auth.operation';
import { useAuth } from 'components/hooks';

export const UserMenu = () => {
    const dispatch = useDispatch();
    const user  = useAuth();

    return (
    <>
        <p>Welcome, {user.name}</p>
        <button type="button" onClick={() => dispatch(logOut())}>
            Log Out
        </button>
    </>
    );
};