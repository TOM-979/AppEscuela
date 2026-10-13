import './Footer.css';

const Footer = () => {
return (
<footer className="footer-escuela">
<div className="container d-flex justify-content-between flex-wrap">
<span><strong>Sistema de Matrícula</strong> - SENATI</span>
<span>© {new Date().getFullYear()} Todos los derechos reservados</span>
</div>
</footer>
);
};
export default Footer;
