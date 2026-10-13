import logoSenati from '../../assets/senati-logo-blanco.png';
import './Navbar.css';

const Navbar = () => {
return (
<nav className="navbar navbar-dark navbar-escuela shadow-sm mb-4">
<div className="container">
<span className="navbar-brand mb-0 h1">
<img className="navbar-logo" src={logoSenati} alt="SENATI" />
Sistema de Matrícula
</span>
<button className="btn btn-outline-light btn-sm">
Cerrar Sesión
</button>
</div>
</nav>
);
};
export default Navbar;
