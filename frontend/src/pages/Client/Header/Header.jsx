import { useContext } from "react";
import { Search, ShoppingCart, Settings, User, LogIn, User2, Menu } from 'lucide-react';
import Profile from "@/assets/dashboard/profile.png";
import logo from "@/assets/logo/logo.svg";
import DarkMode from "@/utils/DarkMode";
import { UserContext } from "@/utils/ProtectedRoutes";
import { Link, useNavigate } from "react-router";

const Header = () => {
  const { user, token, setUser, setToken } = useContext(UserContext);
  const navigate = useNavigate();

  async function handleLogout(e) {
    e.preventDefault();

    const res = await fetch('api/logout', {
      method: 'post',
      headers: { Authorization: `Bearer ${token}` }
    })
    if(res.ok){
      setUser(null);
      setToken(null);
      localStorage.removeItem("token");
      navigate('/');
    }
  }
  return (
    <header
      className="w-full bg-customLight dark:bg-customDark dark:shadow-none transition-all duration-300 relative">
      <div className="mx-0 lg:mx-10 px-4 py-2 md:py-4 lg:py-4">
        <div className="flex items-center w-full">
          <div className="pr-2">
            <button type="button" className="w-990:hidden inline-flex relative justify-center items-center p-0 transition-all h-[37.5px] duration-75 ease-linear rounded-md">
              <Menu className="w-5 h-5"/>
            </button>
          </div>
          <Link to="/" className="-mr-5 lg:mr-0">
            <img src={logo} alt="Logo" className="h-8" />
          </Link>
          <div className="px-8">
            <button type="button" className="w-990:inline-flex hidden relative justify-center items-center p-0 transition-all h-[37.5px] duration-75 ease-linear rounded-md">
              <Menu className="w-5 h-5"/>
            </button>
          </div>
          <div className="relative w-990:inline-flex hidden">
            <input type="text" className="py-3 p-6 dark:bg-contentDark bg-contentLight placeholder:text-black text-sm dark:placeholder:text-white rounded focus-visible:outline-0 min-w-[400px]" 
              placeholder="Type to Search .." autoComplete="off" 
            />
            <button type="button" className="transition-all duration-300 hover:scale-110 absolute right-3.5 top-2.5" >
              <Search className="inline-block size-5 transition-transform duration-300 transform rotate-[360deg]" />
            </button>
          </div>

          <div className="flex gap-3 ms-auto pr-0 lg:pr-2 md:pr-5">
            <div className="w-990:hidden relative flex items-center -mr-2">
              <button type="button" className="w-10 h-10 flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110">
                <Search className="inline-block w-5 h-5 stroke-1 transition-transform duration-300 transform rotate-[360deg]" />
              </button>
            </div>

            <div className="inline-flex relative items-center border-l-2 dark:border-borderDark pl-1 w-990:border-none -mr-2">
              <Link to="/cart" type="button" className="w-10 h-10 flex items-center justify-center rounded-full p-2 transition-all duration-300 hover:scale-110">
                <ShoppingCart className="inline-block w-5 h-5 stroke-1 transition-transform duration-300 transform rotate-[360deg]" />
              </Link>
            </div>

            <div className="relative flex items-center border-l-2 border-r-2 dark:border-borderDark pl-1 -mr-2">
              <DarkMode />
            </div>

            {user && 
              <div className="relative group flex items-center dark:border-borderDark pl-4 -my-3">
                <button type="button" className="inline-block p-0 transition-all duration-200 ease-linear rounded-full">
                  <div className="bg-bgDark rounded-full w-[29px] h-[29px] md:w-[39px] md:h-[39px] lg:w-[39px] lg:h-[39px]">
                    <img src={Profile} alt="" className="w-full h-full rounded-full" />
                  </div>
                </button>
                <div className="lg:flex hidden flex-col items-start justify-center pl-2">
                  <span className="text-md">{user.first_name + ' ' + user.last_name}</span>
                </div>
                <ul className="absolute hidden group-hover:flex flex-col bg-contentLight dark:bg-contentDark shadow-md p-2 rounded w-40 z-10 top-[60px] right-[-20px]">
                  <li className="flex items-center py-3 px-4 leading-4 hover:bg-gray-100 dark:hover:bg-[#3D3D3D] cursor-pointer border-b dark:border-[#3D3D3D]">
                    <User size={15} className="mr-2" /> Account
                  </li>
                  <li className="flex items-center py-3 px-4 leading-4 hover:bg-gray-100 dark:hover:bg-[#3D3D3D] cursor-pointer border-b dark:border-[#3D3D3D]">
                    <Settings size={15} className="mr-2" /> Settings
                  </li>
                  <li className="flex items-center py-3 px-4 leading-4 hover:bg-gray-100 dark:hover:bg-[#3D3D3D] cursor-pointer">
                    <form onSubmit={handleLogout} className="w-full">
                      <button className="flex items-center w-full">
                        <LogIn size={15} className="mr-2" /> Log Out
                      </button>
                    </form>
                  </li>
                </ul>
              </div>
            }
            
            {!user && 
              <div className="relative flex items-center dark:border-borderDark transition-all duration-300 hover:scale-110">
                <div className="relative flex items-center">
                  <Link to="/login" className="leading-4 text-sm flex items-center justify-center">
                    <div type="button" className="w-10 h-10 rounded-full p-2">
                      <User2 className="inline-block w-5 h-5 stroke-1" />
                    </div>
                    Connexion
                  </Link>
                </div>
              </div>
            }

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;