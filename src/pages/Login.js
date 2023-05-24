import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/auth.operation';


const Login = () => {
        const dispatch = useDispatch();
    
        const handleSubmit = e => {
            e.preventDefault();
            const form = e.currentTarget;
            dispatch(logIn({
                email: form.elements.email.value,
                password: form.elements.password.value,
            })
            );
        form.reset();
        };
    return (
        <>
        <h1>Log In</h1>
        <form 
        onSubmit={handleSubmit}
        >
            <label>Email address</label>
            <input 
                name="email"
                type="email"
            /> 
            <label>Password</label>
            <input 
                name="password"
                type="password"
            /> 
            <button type="submit">Log In</button>
        </form>
        </>
    );
}
export default Login;


