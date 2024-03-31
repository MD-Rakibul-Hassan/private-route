import { useContext } from "react";
import ContexProvider, { AuthContext } from "../../../contexts/context";

const Home = () => {
	const { signOutUser, user } = useContext(AuthContext);
	const handleLogOut = () => {
		signOutUser()
		.then(result => console.log(result.user))
	}
	return (
		<div className="">
			<button onClick={handleLogOut}>Log Out</button>
			<h1>{ user && user.email}</h1>
		</div>
	)
}
export default Home;