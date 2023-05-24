import  Navigation  from '../navigation/Navigation';
import { UserMenu } from 'components/userMenu/UserMenu';
import  AuthNav  from '../authNav/AuthNav';
import {useAuth} from '../hooks/useAuth';


const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return (
    <>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
    );
};
export default AppBar;