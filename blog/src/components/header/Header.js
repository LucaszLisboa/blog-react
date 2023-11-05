import { Outlet, Link } from "react-router-dom";
import './Header.css';


function Header(){
  return (
    <header>
      <ul>
        <li><Link to="/">Blog</Link></li>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </header>
  )
}

export default Header;