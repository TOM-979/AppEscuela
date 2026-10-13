// src/App.tsx
import Navbar from './components/Navbar/Navbar';
import AlumnoCard from './components/AlumnoCard/AlumnoCard';
import Footer from './components/Footer/Footer';
import './App.css';
function App() {
return (
<>
{/* 1. Insertamos el Navbar en la parte superior */}
<Navbar />
{/* 2. Contenedor principal de la página */}
<main className="container contenido">
<div className="encabezado">
<h2>Directorio de Alumnos</h2>
<p>Consulta y gestiona los alumnos registrados en el sistema.</p>
</div>
<div className="row">
{/* 3. Reutilizamos el componente AlumnoCard pasándole Props diferentes */}
<AlumnoCard
nombre="Daniel Puccio"
carrera="Desarrollo de Software"
estado="Matriculado"
/>
<AlumnoCard
nombre="Maria Perez"
carrera="Diseño Gráfico"
estado="Inactivo"
/>
<AlumnoCard
nombre="Carlos Mendoza"
carrera="Administración Industrial"
estado="Matriculado"
/>
<AlumnoCard
nombre="Lucia Fernandez"
carrera="Mecatrónica Industrial"
estado="Matriculado"
/>
<AlumnoCard
nombre="Jose Quispe"
carrera="Electricidad Industrial"
estado="Inactivo"
/>
<AlumnoCard
nombre="Andrea Torres"
carrera="Redes y Seguridad Informática"
estado="Matriculado"
/>
</div>
</main>
{/* 4. Pie de página */}
<Footer />
</>
);
}
export default App;
