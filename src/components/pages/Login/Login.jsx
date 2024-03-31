import { getAuth } from "firebase/auth";
import { useContext } from "react";
import { AuthContext } from './../../../contexts/context';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { loginUsers } = useContext(AuthContext);
    const navigate = useNavigate();
    const handleRegsterSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUsers(email, password)
            .then(result => {
                const exsistingUser = result.user;
                console.log(exsistingUser)
                e.target.reset();
                navigate('/')
            })
        .catch(e => console.log(e.message))
    }
    return (
        <div className="flex justify-center items-center h-screen">
            <form className="flex flex-col bg-green-600 rounded-xl w-1/2 shadow-xl p-10" onSubmit={handleRegsterSubmit}>
                <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    className="h-14 rounded-xl my-2 px-5"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    name="password"
                    className="h-14 rounded-xl my-2 px-5"
                />
                <input
                    type="submit"
                    value="Login"
                    className="bg-orange-500 text-white font-bold py4 rounded-xl h-14"
                />
            </form> 
        </div>
    )
}
export default Login;