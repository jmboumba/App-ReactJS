import React from "react";
import {
  Route,
  NavLink,
  HashRouter,
  useNavigate
} from "react-router-dom";

function Header(){
  return(

    <div className="app">
<header>
     <nav
        class="flex flex-wrapitems-centerjustify-betweenw-fullpy-4md:py-0px-4text-lg text-gray-700bg-white"
      >
       <div>
          <NavLink to="/">
            <img
              width="150"
              height="150"
              src="https://tse1.explicit.bing.net/th?id=OIP.nxu_HcVwG0yzJeP41HbNRAHaDf&pid=Api&P=0"
            />
          </NavLink>
        </div>
    
       
       <div class="hidden w-full md:flex md:items-center md:w-auto" id="menu" Align='right'>
       <NavLink 
              className="md:p-4 py-2 block hover:text-purple-400  " to="/fetch" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> fetch 
        </NavLink>
       <NavLink 
              className="md:p-4 py-2 block hover:text-purple-400  " to="/demo" style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> demo 
      </NavLink>

      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/newsfeed" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> NewsFeed 
      </NavLink>

      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/login" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> Login 
      </NavLink>

      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/newslisthook" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> NewsListHook 
      </NavLink>

      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/counter" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> Counter
      </NavLink>

      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/list" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> IdentityCard
      </NavLink>
      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/contextgeneral" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> Context 
      </NavLink>
      <NavLink
            className="md:p-4 py-2 block hover:text-purple-400  " to="/weather" 
            style={({ isActive }) => ({
              color: isActive ? '#fff' : '#545e6f',
              background: isActive ? '#7600dc' : '#f0f0f0',
            })}> Weather 
      </NavLink>
        </div>
    </nav>
  </header>
      </div>
  )
}
  
    
    
    export default Header ;