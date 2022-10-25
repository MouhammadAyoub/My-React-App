import { Link, useMatch, useResolvedPath } from "react-router-dom"
import '../styles/navbar.css';
import myLogo from '../images/logo-react.png';

export default function Navbar() {

  return (

    <nav className="nav">

      <Link to="/" className="site-title">
        <img alt="logo" src={myLogo} width="45px" />
        &nbsp; 
        <b className="myTitle">MyReactApp</b>
      </Link>

      <ul>
        <CustomLink to="./Registration">Registration</CustomLink>
        <CustomLink to="/Dashboard">Dashboard</CustomLink>
      </ul>

    </nav>

  );
}

function CustomLink({ to, children, ...props }) {

  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (

    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>

  );
}