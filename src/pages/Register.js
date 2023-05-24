import {register} from "redux/auth/auth.operation";
import { useDispatch } from 'react-redux';

const Register = () => {
    const dispatch = useDispatch();

    
    const handleSubmit =  (e) => {
        e.preventDefault();
        const form = e.currentTarget;

        dispatch(register({
                name: form.elements.name.value,
                email: form.elements.email.value,
                password: form.elements.password.value
            })
        );
        form.reset();
    };
    
    return (
        <>
        <h1>Sign Up</h1>
        <form 
        onSubmit={handleSubmit}
        >
            <label>Name</label>
            <input
            name="name"
            type="text"
        />
        <label>Email address</label>
        <input 
            name="email"
            type="text"
        /> 
        <label>Password</label>
        <input 
            name="password"
            type="password"
        /> 
        <button type="submit">Sign Up</button>
    </form>

    </>
);
}
export default Register;




