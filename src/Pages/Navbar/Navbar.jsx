import { Heart, ShoppingCart } from 'lucide-react';
import './navbar.css'

const Navbar = () => {
    const navlinks = <>
    <li><a>Item 1</a></li>
       
       <li><a>Item 3</a></li>
    </>
    return (
        <div className='bg-[#FFF8F3]'>
           <div className="navbar  max-w-7xl mx-auto border-black border-b-2">
  <div className="">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {navlinks}
      </ul>
    </div>
   
  </div>
  <div className="navbar-start hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      {navlinks}
    </ul>
  </div>
  <div className="navbar-end">
    <a className="">Account</a>
  </div>
  {/* 2nd */}
</div> 
           <div className="navbar max-w-7xl mx-auto">
  <div className="navbar-start">
  
    <img className="navbarlogo" src="https://i.ibb.co/R62NxG3/attachment-79642225-removebg-preview-2.png" alt="" />
  </div>
  <div className="navbar-center hidden lg:flex">
    
  </div>
  <div className="navbar-end space-x-2">
    <a className="flex flex-row gap-2"> < Heart /> Wishlist</a>
    <p className="flex flex-row gap-2"><ShoppingCart />Cart</p>
  </div>
</div> 
        </div>
    );
};

export default Navbar;