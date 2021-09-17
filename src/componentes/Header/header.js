import { Link} from 'react-router-dom';

const Header = () => {
  return (
    <header className="header-container">
      <span>ZAP SYSTEM</span>
        <Link to="/" exact>
          <button>Dashboard</button>
        </Link>
        <Link to="/mensagens">
          <button>Mensagens</button>
        </Link>
        
    </header>
  )
}
export default Header