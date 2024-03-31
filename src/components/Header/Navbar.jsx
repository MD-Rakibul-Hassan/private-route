import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav className="bg-green-600 p-5">
            <div className="flex justify-between px-5 container mx-auto">
                <div>
                    <h1 className="text-xl font-bold text-slate-700">Logo</h1>
                </div>
                <div>
                    <ul className="flex gap-4">
                        <li>
                            <NavLink
                                to='/'
                                className={({isActive}) => isActive ? "text-xl font-bold text-gray-400":''}
                            >Home</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/login'
                                className={({isActive}) => isActive ? "text-xl font-bold text-gray-400":''}
                            >
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/signup'
                                className={({isActive}) => isActive ? "text-xl font-bold text-gray-400":''}
                            >Sign Up</NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='/items'
                                className={({isActive}) => isActive ? "text-xl font-bold text-gray-400":''}
                            >Items</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Navbar;